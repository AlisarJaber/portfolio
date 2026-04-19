export default function TechStack({ items = [] }) {
  return (
    <div className="tech-stack">
      {items.map((item) => (
        <span key={item} className="tech-chip">
          {item}
        </span>
      ))}
    </div>
  );
}