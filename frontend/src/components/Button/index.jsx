export default function Button({ className, name, type, onClick }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
