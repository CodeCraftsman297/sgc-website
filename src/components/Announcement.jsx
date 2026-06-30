import "./Announcement.css";

function Announcement() {
  const notice =
    "📢 Admissions Open for Academic Year 2026–27 | Free Demo Lecture Available | Limited Seats | Call: 9987420415";

  return (
    <section className="announcement">
      <div className="announcement-label">
        📢 NOTICE
      </div>

      <div className="announcement-content">
        <div className="announcement-text">
          <span>{notice}</span>
          <span>{notice}</span>
        </div>
      </div>
    </section>
  );
}

export default Announcement;