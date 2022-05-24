import React from "react";

const Analysis = () => {
  const analysis = [960, 122, 321];

  return (
    <div className="analysis">
      Sentiment Analysis <br />
      {analysis.map((item) => {
        return <ul>{item}</ul>;
      })}
    </div>
  );
};
export default Analysis;
