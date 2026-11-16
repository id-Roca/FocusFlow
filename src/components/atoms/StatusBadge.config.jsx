export function StatusBadge({ status }) {
  return (
    <span
      className={`badge badge-soft ${
        status === "completed" ? "badge-primary" : "badge-secondary"
      }`}
    >
      {status}
    </span>
  );
}
