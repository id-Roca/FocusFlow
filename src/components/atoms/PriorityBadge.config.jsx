export function PriorityBadge({ priority }) {
  const colors = {
    low: "badge-info",
    medium: "badge-warning",
    high: "badge-error",
  };

  return (
    <span className={`badge ${colors[priority]}`}>
      {priority}
    </span>
  );
}
