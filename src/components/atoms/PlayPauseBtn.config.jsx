
export default function PlayPauseBtn({ onClick, children }) {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      {children}
    </button>
  );
}