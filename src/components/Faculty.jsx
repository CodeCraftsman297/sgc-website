import "./Faculty.css";

function Faculty() {
  return (
    <section className="about" id="faculty">

      <h2>Why Choose Shree Ganesh Classes?</h2>

      <div className="about-grid">

        <div className="about-card">
          <h3>🏆 14+ Years of Excellence</h3>
          <p>
            Consistent academic success and trusted guidance.
          </p>
        </div>

        <div className="about-card">
          <h3>👨‍🏫 Experienced Faculty</h3>
          <p>
            Dedicated teachers focused on concept clarity.
          </p>
        </div>

        <div className="about-card">
          <h3>📚 Regular Tests</h3>
          <p>
            Weekly assessments and progress tracking.
          </p>
        </div>

        <div className="about-card">
          <h3>🎯 Personal Attention</h3>
          <p>
            Individual guidance for every student.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Faculty;