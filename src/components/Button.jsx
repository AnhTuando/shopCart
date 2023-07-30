export default function Button({ children, className, onClick }) {
  return (
    <>
      <button className={`rounded-1 p-2 btn-${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
