import "./Stats.css";
import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "react-intersection-observer";

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    {
      number: 5000,
      suffix: "+",
      title: "Students Guided",
      icon: "🎓",
    },
    {
      number: 14,
      suffix: "+",
      title: "Years of Excellence",
      icon: "📅",
    },
    {
      number: 100,
      suffix: "%",
      title: "Excellent Board Results",
      icon: "🏆",
    },
    {
      number: 100,
      suffix: "%",
      title: "Personal Attention",
      icon: "❤️",
    },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>

           <h2>
              <AnimatedCounter
              end={item.number}
              suffix={item.suffix}
              />
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;