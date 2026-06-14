
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const stats = [
  { 
    title: "One minute", 
    subtitle: "60 seconds to change your life",
    icon: `\${prefix}/images/mask_group_one_minute.svg`
  },
  { 
    title: "Five Racks", 
    subtitle: "Five Racks. Unlimited focus.",
    icon: `\${prefix}/images/mask_group_five_racks.svg`
  },
  { 
    title: "one million", 
    subtitle: "one shot. $1,000,000.",
    icon: `\${prefix}/images/mask_group_one_million.svg`
  },
];

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="stats-banner-inner">
        {stats.map((stat, i) => (
          <div key={i} className="stats-item">
            <div className="stats-icon-wrap">
              <img src={stat.icon} alt={stat.title} className="stats-icon" />
            </div>
            <div className="stats-text">
              <div className="stats-title">{stat.title}</div>
              <div className="stats-subtitle">{stat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
