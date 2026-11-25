import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./emailinstockremover.css";

const buildGtmTag = (skus) => {
  return `(function() {
  var TARGET_PRODUCT_IDS = ${JSON.stringify(skus)};

  function removeEmailInStockButtons() {
    var productCodeFields = document.querySelectorAll(
      'input[name="productCodePost"]'
    );

    var pageProductIds = [];

    for (var i = 0; i < productCodeFields.length; i++) {
      var productId = productCodeFields[i].value;

      if (TARGET_PRODUCT_IDS.indexOf(productId) !== -1) {
        pageProductIds.push(productId);
      }
    }

    if (!pageProductIds.length) {
      return;
    }

    var buttons = document.querySelectorAll(
      '.AddToCart-EmailWhenInStockAction button[data-productcode]'
    );

    for (var j = 0; j < buttons.length; j++) {
      var buttonProductId = buttons[j].getAttribute('data-productcode');

      if (pageProductIds.indexOf(buttonProductId) !== -1) {
        var wrapper = buttons[j].closest(
          '.AddToCart-EmailWhenInStockAction'
        );

        if (wrapper && wrapper.parentNode) {
          wrapper.parentNode.removeChild(wrapper);
        }
      }
    }
  }

  removeEmailInStockButtons();

  var attempts = 0;
  var interval = setInterval(function() {
    removeEmailInStockButtons();
    attempts++;

    if (attempts >= 20) {
      clearInterval(interval);
    }
  }, 250);
})();`;
};

export const EmailInStockRemover = ({
  title,
  description,
  initialSkus,
}) => {
  const [skuInput, setSkuInput] = useState(initialSkus);
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => {
    var tokens = skuInput.split(/[\s,;]+/).filter(Boolean);
    var valid = [];
    var invalid = [];

    tokens.forEach((token) => {
      var sku = token.trim();

      if (!/^[A-Za-z0-9_-]+$/.test(sku)) {
        invalid.push(sku);
      } else if (valid.indexOf(sku) === -1) {
        valid.push(sku);
      }
    });

    return { skus: valid, invalid: invalid };
  }, [skuInput]);

  const generatedTag = useMemo(
    () => buildGtmTag(parsed.skus),
    [parsed.skus]
  );

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedTag);
      } else {
        var textArea = document.createElement("textarea");
        textArea.value = generatedTag;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section className="eisr">
      <div className="eisr__header">
        <div className="eisr__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 7h14M5 12h14M5 17h9M3 3h18v18H3z" />
            <path d="m16 16 2 2 4-4" />
          </svg>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="eisr__input-section">
        <div className="eisr__label-row">
          <label htmlFor="eisr-skus">Product SKUs</label>
          <span>One per line, or separated by commas or spaces</span>
        </div>
        <textarea
          id="eisr-skus"
          value={skuInput}
          onChange={(event) => setSkuInput(event.target.value)}
          placeholder={"537767\n123456\n987654"}
          rows={8}
          spellCheck="false"
        />
        <div className="eisr__input-footer">
          <span>{parsed.skus.length} unique {parsed.skus.length === 1 ? "SKU" : "SKUs"} ready</span>
          <button
            type="button"
            className="eisr__clear"
            onClick={() => setSkuInput("")}
            disabled={!skuInput}
          >
            Clear list
          </button>
        </div>
        {parsed.invalid.length > 0 && (
          <p className="eisr__warning" role="alert">
            These entries contain unsupported characters and will be ignored: {parsed.invalid.join(", ")}
          </p>
        )}
      </div>

      <div className="eisr__summary" aria-live="polite">
        <div>
          <span>SKUs included</span>
          <strong>{parsed.skus.length.toLocaleString()}</strong>
        </div>
        <div>
          <span>Duplicates removed</span>
          <strong>{Math.max(0, skuInput.split(/[\s,;]+/).filter(Boolean).length - parsed.skus.length - parsed.invalid.length).toLocaleString()}</strong>
        </div>
        <div>
          <span>GTM tag</span>
          <strong>{parsed.skus.length ? "Ready" : "Waiting"}</strong>
        </div>
      </div>

      <div className="eisr__output">
        <div className="eisr__output-heading">
          <div>
            <h3>Generated GTM Custom HTML</h3>
            <p>{parsed.skus.length ? "Copy this code into a Custom HTML tag in Google Tag Manager." : "Add at least one valid SKU to generate your tag."}</p>
          </div>
          <button
            type="button"
            className="eisr__copy"
            onClick={handleCopy}
            disabled={!parsed.skus.length}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="8" y="8" width="13" height="13" rx="2" />
              <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
            </svg>
            {copied ? "Copied!" : "Copy GTM tag"}
          </button>
        </div>
        <pre className="eisr__code"><code>{generatedTag}</code></pre>
      </div>

      <div className="eisr__instructions">
        <strong>GTM setup</strong>
        <ol>
          <li>Create a new <strong>Custom HTML</strong> tag.</li>
          <li>Paste the generated code above.</li>
          <li>Set the trigger to <strong>DOM Ready</strong>.</li>
          <li>Choose <strong>Once per page</strong> for tag firing options.</li>
        </ol>
        <p>The tag only removes the Email me when in stock section when the current page SKU matches one of your entries. Other products are unaffected.</p>
      </div>
    </section>
  );
};

EmailInStockRemover.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  initialSkus: PropTypes.string,
};

EmailInStockRemover.defaultProps = {
  title: "Email Me When In Stock Remover",
  description: "Generate a GTM tag to hide the email notification button for selected products.",
  initialSkus: "537767",
};
