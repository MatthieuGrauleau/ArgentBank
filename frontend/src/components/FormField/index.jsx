export default function FormField({
  className,
  id,
  type,
  label,
  name,
  defaultValue,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}
