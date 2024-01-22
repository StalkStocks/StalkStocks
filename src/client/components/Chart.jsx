import React, { useEffect } from "react";
import generateChart from "./chart-config.js";

function Charter({ stockTicker }) {
  useEffect(() => {
    (async function () {
      generateChart(stockTicker);
    })();
  }, [stockTicker]);

  return (
    <div className="chart">
      <canvas id="graph"></canvas>
    </div>
  );
}

export default Charter;
