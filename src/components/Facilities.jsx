import "./Facilities.css";
import facilitiesData from "../data/facilitiesData";

function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities-header">
        <h2>Why Choose Shree Ganesh Classes?</h2>
        <p>
          Everything your child needs for a successful academic journey.
        </p>
      </div>

      <div className="facilities-grid">
        {facilitiesData.map((facility) => {
          const Icon = facility.icon;

          return (
            <div className="facility-card" key={facility.id}>
              <div className="facility-icon">
                <Icon />
              </div>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Facilities;