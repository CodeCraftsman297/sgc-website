import "./Courses.css";
import {
  FaSchool,
  FaBookOpen,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

function Courses() {
  return (
    <section className="courses" id="courses">
      <span className="section-tag">OUR COURSES</span>

      <h2>Learning Today, Leading Tomorrow</h2>

      <p className="courses-subtitle">
        We provide quality education from primary school to higher secondary
        commerce, along with private tutoring for State Board, CBSE, and ICSE
        students through experienced faculty and personal attention.
      </p>

      <div className="course-grid">

        <div className="course-card">
          <FaSchool className="course-icon" />

          <h3>Primary School</h3>

          <h4>Std. 1st – 4th</h4>

          <p>
            Build a strong academic foundation through concept-based learning,
            regular practice, and personal attention.
          </p>
        </div>

        <div className="course-card">
          <FaBookOpen className="course-icon" />

          <h3>Secondary School</h3>

          <h4>Std. 5th – 10th</h4>

          <p>
            Complete preparation for State Board, CBSE & ICSE with conceptual
            learning and exam-oriented guidance.
          </p>
        </div>

        <div className="course-card">
          <FaChartLine className="course-icon" />

          <h3>Higher Secondary</h3>

          <h4>11th & 12th Commerce</h4>

          <p>
            Expert coaching in Accounts, Economics, OC, SP and Maths with
            focused board exam preparation.
          </p>
        </div>

        <div className="course-card">
          <FaUserGraduate className="course-icon" />

          <h3>Private Tutoring</h3>

          <h4>One-to-One & Small Batches</h4>

          <p>
            Personalized learning plans with individual attention to improve
            confidence, understanding, and academic performance.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Courses;