export default function BotonOperacion({ handleClick, texto }) {
  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white p-2 rounded"
    >
      {texto}
    </button>
  );
}
