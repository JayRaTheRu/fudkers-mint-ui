// src/components/Cm1RevealPanel.jsx
import React from "react";
import { getCm1Reveal } from "../reveals/cm1";

export function Cm1RevealPanel({ mint }) {
  if (!mint) return null;

  const entry = getCm1Reveal(mint.trim());

  if (!entry) {
    return (
      <div className="reveal-panel">
        <h2>🎲 Mystery FUDker minted!</h2>
        <p>Mint: {mint}</p>
        <p>This mint is not in the CM #1 reveal map.</p>
      </div>
    );
  }

  return (
    <div className="reveal-panel">
      <h2>🎉 Your FUDker is revealed!</h2>
      <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>{entry.name}</p>

      <img
        src={entry.image}
        alt={entry.name}
        style={{
          maxWidth: "360px",
          borderRadius: "16px",
          display: "block",
          marginBottom: "1rem",
        }}
      />

      {entry.animation && (
  <video
    src={entry.animation}
    controls   // 👈 shows play/pause + volume
    // autoPlay  // 👈 optional: you *can* keep this, but browsers may block autoplay with sound
    loop
    style={{
      maxWidth: '360px',
      borderRadius: '16px',
      display: 'block',
      marginBottom: '1rem',
    }}
  />
)}

      <p style={{ wordBreak: "break-all", fontSize: "0.9rem", opacity: 0.8 }}>
        Mint: {entry.mint}
      </p>
    </div>
  );
}

