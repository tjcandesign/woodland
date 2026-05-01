'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectCalculator() {
  const [width, setWidth] = useState(24);
  const [height, setHeight] = useState(36);
  const [price, setPrice] = useState(0.45);

  const sqin = width * height;
  const each = sqin * price;

  const dollar = useRef(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }));
  const num = useRef(new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }));

  const sqinTxt = num.current.format(sqin);
  const eachTxt = dollar.current.format(each);

  useEffect(() => {
    const diaW = document.getElementById('calc-diagram-w');
    const diaH = document.getElementById('calc-diagram-h');
    const diaSqin = document.getElementById('calc-diagram-sqin');
    const diaEach = document.getElementById('calc-diagram-each');
    if (diaW) diaW.textContent = num.current.format(width);
    if (diaH) diaH.textContent = num.current.format(height);
    if (diaSqin) diaSqin.textContent = sqinTxt;
    if (diaEach) diaEach.textContent = eachTxt;
  }, [width, height, sqinTxt, eachTxt]);

  return (
    <div className="aim-card calc-card">
      <div className="calc-head">
        <div>
          <div className="calc-eyebrow">Sizing &amp; cost calculator</div>
          <h3 className="calc-title">Acrylic price calculator</h3>
        </div>
        <button type="button" className="btn btn-outline btn-dark btn-rounded calc-print" onClick={() => window.print()}>Print spec sheet</button>
      </div>

      <div className="calc-grid">
        <label className="calc-field">
          <span>Width</span>
          <span className="calc-input-wrap">
            <input type="number" id="calc-width" inputMode="decimal" step={0.5} min={1} value={width} onChange={e => setWidth(parseFloat(e.target.value) || 0)} />
            <span className="calc-unit">in</span>
          </span>
        </label>
        <label className="calc-field">
          <span>Height</span>
          <span className="calc-input-wrap">
            <input type="number" id="calc-height" inputMode="decimal" step={0.5} min={1} value={height} onChange={e => setHeight(parseFloat(e.target.value) || 0)} />
            <span className="calc-unit">in</span>
          </span>
        </label>
        <label className="calc-field">
          <span>Price per sq inch</span>
          <span className="calc-input-wrap">
            <span className="calc-prefix">$</span>
            <input type="number" id="calc-price" inputMode="decimal" step={0.01} min={0} value={price} onChange={e => setPrice(parseFloat(e.target.value) || 0)} />
          </span>
        </label>
      </div>

      <dl className="calc-out">
        <div className="calc-out-row">
          <dt>Square inches</dt>
          <dd><span id="calc-sqin">{sqinTxt}</span> sq in</dd>
        </div>
        <div className="calc-out-row calc-out-total">
          <dt>Price</dt>
          <dd id="calc-each">{eachTxt}</dd>
        </div>
      </dl>
      <p className="calc-note">Material price seeded at $0.45 / sq in as a placeholder — adjust to vendor quote when received.</p>
    </div>
  );
}
