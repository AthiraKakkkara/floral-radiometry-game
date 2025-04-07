export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-2xl shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
