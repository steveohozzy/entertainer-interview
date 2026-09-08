import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";

export const Christmasheaderfooterbanner = ({
  image,
  mobileimage,
  imagealt,
}) => {

  return (
    <>
      <style>
        {`
  .christmas-bottom-image-wrapper {
    width: 100%;
  }

  .christmas-bottom-image-wrapper img {
    display: block;
    width: 100%;
    height: auto;
  }
    `}
</style><div class="christmas-bottom-image-wrapper"><picture><source media="(max-width: 767px)" srcset={mobileimage}/><img alt="" src={image} /></picture></div>
    </>
  );
};

Christmasheaderfooterbanner.propTypes = {
  image: PropTypes.string,
  mobileimage: PropTypes.string,
  imagealt: PropTypes.string,
};