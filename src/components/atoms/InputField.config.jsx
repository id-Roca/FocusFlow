export default function InputField({ value, onChange }) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search task.."
        className="input input-neutral w-full"
      />
    </>
  );
}
