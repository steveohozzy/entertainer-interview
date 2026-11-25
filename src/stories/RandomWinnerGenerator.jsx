import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import * as XLSX from "xlsx";
import "./randomwinnergenerator.css";

const getRandomIndex = (max) => {
  if (max <= 1) return 0;

  // Use the browser's cryptographically secure random source where available.
  if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
    const range = 0x100000000;
    const limit = range - (range % max);
    const values = new Uint32Array(1);
    let value;

    do {
      window.crypto.getRandomValues(values);
      value = values[0];
    } while (value >= limit);

    return value % max;
  }

  return Math.floor(Math.random() * max);
};

const shuffle = (items) => {
  const result = items.slice();

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = getRandomIndex(i + 1);
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
};

const escapeCsvValue = (value) => {
  const text = value === null || value === undefined ? "" : String(value);
  return '"' + text.replace(/"/g, '""') + '"';
};

const downloadCsv = (headers, rows, filename) => {
  const content = [headers, ...rows]
    .map((row) => row.map(escapeCsvValue).join(","))
    .join("\r\n");
  const blob = new Blob(["\uFEFF", content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const RandomWinnerGenerator = ({ title, description }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [headers, setHeaders] = useState([]);
  const [entrants, setEntrants] = useState([]);
  const [winnerCount, setWinnerCount] = useState("1");
  const [winners, setWinners] = useState(null);
  const [remaining, setRemaining] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;

    setError("");
    setWinners(null);
    setRemaining(null);

    const extension = file.name.split(".").pop().toLowerCase();
    if (!["csv", "xlsx", "xls"].includes(extension)) {
      setError("Please upload a CSV or Excel file (.csv, .xlsx or .xls).");
      return;
    }

    setIsLoading(true);

    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array", cellDates: false });
      const firstSheetName = workbook.SheetNames[0];

      if (!firstSheetName) {
        throw new Error("No worksheets were found in this file.");
      }

      const sheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: false,
        defval: "",
        blankrows: false,
      });

      if (!rows.length) {
        throw new Error("The first worksheet is empty.");
      }

      const importedHeaders = rows[0].map((cell, index) => {
        const value = String(cell === null || cell === undefined ? "" : cell).trim();
        return value || "Column " + (index + 1);
      });

      const importedEntrants = rows.slice(1)
        .filter((row) => row.some((cell) => String(cell === null || cell === undefined ? "" : cell).trim() !== ""))
        .map((row) => importedHeaders.map((header, index) => {
          const value = row[index];
          return value === null || value === undefined ? "" : String(value);
        }));

      if (!importedEntrants.length) {
        throw new Error("No entrant rows were found below the header row.");
      }

      setHeaders(importedHeaders);
      setEntrants(importedEntrants);
      setFileName(file.name);
      setWinnerCount("1");
    } catch (e) {
      setHeaders([]);
      setEntrants([]);
      setFileName("");
      setError(e && e.message ? e.message : "We couldn't read that file. Please check it and try again.");
    } finally {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const handleDraw = () => {
    const count = Number(winnerCount);

    if (!Number.isInteger(count) || count < 1 || count > entrants.length) {
      setError("Choose a whole number between 1 and " + entrants.length + ".");
      return;
    }

    if (!window.confirm("Pick " + count + " random " + (count === 1 ? "winner" : "winners") + " from " + entrants.length + " entrants? This will create a new draw.")) {
      return;
    }

    const shuffled = shuffle(entrants);
    setWinners(shuffled.slice(0, count));
    setRemaining(shuffled.slice(count));
    setError("");
  };

  const handleReset = () => {
    setWinners(null);
    setRemaining(null);
    setError("");
  };

  return (
    <section className="rwg">
      <div className="rwg__header">
        <div className="rwg__heading-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 21h8m-4-4v4M7 4h10v3a5 5 0 0 1-10 0V4Zm0 2H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4M9 4V2h6v2" /></svg>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div
        className={"rwg__upload" + (isDragging ? " rwg__upload--dragging" : "")}
        onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => { event.preventDefault(); setIsDragging(false); handleFile(event.dataTransfer.files && event.dataTransfer.files[0]); }}
      >
        <input
          ref={inputRef}
          className="rwg__file-input"
          type="file"
          accept=".csv,.xlsx,.xls"
          aria-label="Choose a CSV or Excel file"
          onChange={(event) => handleFile(event.target.files && event.target.files[0])}
        />
        <div className="rwg__upload-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8m-8 4h8M8 9h2" /></svg>
        </div>
        <h3>{fileName ? "Entrant list imported" : "Upload your entrant list"}</h3>
        <p>{fileName || "Choose a CSV or Excel file to get started."}</p>
        <button
          type="button"
          className="rwg__button rwg__button--secondary"
          onClick={() => inputRef.current && inputRef.current.click()}
          disabled={isLoading}
        >
          {isLoading ? "Importing..." : entrants.length ? "Choose another file" : "Browse files"}
        </button>
        <span className="rwg__hint">CSV, XLSX or XLS · First worksheet used for Excel files</span>
      </div>

      {error && <div className="rwg__error" role="alert">{error}</div>}

      {entrants.length > 0 && (
        <>
          <div className="rwg__summary" aria-live="polite">
            <div><span>Entrants loaded</span><strong>{entrants.length.toLocaleString()}</strong></div>
            <div><span>Winners to pick</span><strong>{winnerCount || "—"}</strong></div>
            <div><span>Remaining</span><strong>{winners ? remaining.length.toLocaleString() : "—"}</strong></div>
          </div>

          <div className="rwg__draw">
            <label htmlFor="rwg-winner-count">How many winners would you like?</label>
            <div className="rwg__draw-controls">
              <input
                id="rwg-winner-count"
                type="number"
                min="1"
                max={entrants.length}
                step="1"
                value={winnerCount}
                onChange={(event) => setWinnerCount(event.target.value)}
              />
              <button
                type="button"
                className="rwg__button rwg__button--primary"
                onClick={handleDraw}
                disabled={isLoading || !entrants.length}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 3 4 4-4 4M4 7h16M8 21l-4-4 4-4m12 4H4" /></svg>
                {winners ? "Pick new winners" : "Pick random winners"}
              </button>
            </div>
            <p className="rwg__hint">Each row can only be selected once. Duplicate names or email addresses are treated as separate entries.</p>
          </div>

          <div className="rwg__preview">
            <div className="rwg__section-heading">
              <div><h3>Entrant preview</h3><span>Showing the first {Math.min(entrants.length, 5)} of {entrants.length.toLocaleString()} entrants</span></div>
            </div>
            <div className="rwg__table-wrap">
              <table>
                <thead><tr>{headers.slice(0, 5).map((header, index) => <th key={index}>{header}</th>)}</tr></thead>
                <tbody>{entrants.slice(0, 5).map((row, rowIndex) => (
                  <tr key={rowIndex}>{row.slice(0, 5).map((cell, cellIndex) => <td key={cellIndex}>{cell || "—"}</td>)}</tr>
                ))}</tbody>
              </table>
              {headers.length > 5 && <p className="rwg__table-note">Preview shows the first 5 columns. All columns will be included in the downloads.</p>}
            </div>
          </div>
        </>
      )}

      {winners && remaining && (
        <div className="rwg__results" aria-live="polite">
          <div className="rwg__results-heading">
            <div className="rwg__trophy" aria-hidden="true">🏆</div>
            <div><h3>Your winners have been selected!</h3><p>{winners.length} {winners.length === 1 ? "winner" : "winners"} selected at random from {entrants.length.toLocaleString()} entrants.</p></div>
          </div>

          <div className="rwg__section-heading">
            <div><h3>Selected winners</h3><span>{winners.length.toLocaleString()} entries</span></div>
            <button type="button" className="rwg__button rwg__button--download" onClick={() => downloadCsv(headers, winners, "winners.csv")}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" /></svg> Download winners CSV
            </button>
          </div>
          <div className="rwg__table-wrap">
            <table>
              <thead><tr>{headers.slice(0, 5).map((header, index) => <th key={index}>{header}</th>)}</tr></thead>
              <tbody>{winners.map((row, rowIndex) => <tr key={rowIndex}>{row.slice(0, 5).map((cell, cellIndex) => <td key={cellIndex}>{cell || "—"}</td>)}</tr>)}</tbody>
            </table>
            {headers.length > 5 && <p className="rwg__table-note">Showing the first 5 columns. The CSV includes all columns.</p>}
          </div>

          <div className="rwg__remaining">
            <div><h3>Remaining entrants</h3><p>{remaining.length.toLocaleString()} entries not selected.</p></div>
            <button type="button" className="rwg__button rwg__button--download" onClick={() => downloadCsv(headers, remaining, "remaining-entrants.csv")}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" /></svg> Download remaining CSV
            </button>
          </div>
          <button type="button" className="rwg__reset" onClick={handleReset}>Clear results and start again</button>
        </div>
      )}
    </section>
  );
};

RandomWinnerGenerator.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

RandomWinnerGenerator.defaultProps = {
  title: "Random Winner Generator",
  description: "Select winners fairly from your entrant list in just a few clicks.",
};
