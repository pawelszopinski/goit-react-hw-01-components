const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
