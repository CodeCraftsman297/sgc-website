import "./TeachingApproach.css";
import teachingApproachData from "../data/teachingApproachData";

function TeachingApproach() {
  return (
    <section className="teaching" id="teaching">
      <div className="teaching-header">
        <h2>How We Help Students Succeed</h2>
        <p>
          A simple step-by-step learning process designed to build confidence,
          improve performance, and achieve excellent results.
        </p>
      </div>

      <div className="timeline">
        {teachingApproachData.map((step) => {
          const Icon = step.icon;

          return (
            <div className="timeline-item" key={step.id}>
              <div className="timeline-circle">
                <Icon />
              </div>

              <div className="timeline-card">
                <span className="step-number">
                  Step {step.id}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TeachingApproach;