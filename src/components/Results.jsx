import "./Results.css";

function Results() {
  return (
    <section className="results" id="results">

      <h2>Outstanding Results</h2>

      <div className="results-stats">

        <div className="card">
          <h1>99%</h1>
          <p>Top Score</p>
        </div>

        <div className="card">
          <h1>9+</h1>
          <p>Students Above 90%</p>
        </div>

        <div className="card">
          <h1>60+</h1>
          <p>Students Above 80%</p>
        </div>

        <div className="card">
          <h1>100%</h1>
          <p>Results For 14 Years</p>
        </div>

      </div>

      <div className="topper-gallery">
      <img src="/results.png" alt="SGC Results" />
      </div>

    </section>
  );
}

export default Results;