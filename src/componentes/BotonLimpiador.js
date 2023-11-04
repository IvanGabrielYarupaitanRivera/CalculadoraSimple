export default function BotonLimpiador({ handleClick, texto }) {
  return (
    <button
      onClick={handleClick}
      className="bg-green-300 text-black p-2 rounded"
    >
      {texto}
    </button>
  );
}
