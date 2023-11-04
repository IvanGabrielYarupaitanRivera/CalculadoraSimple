export default function Resultado({ resultado }) {
    return (
      <div aria-live="polite">
        <label htmlFor="resultado" className="block text-purple-600 mb-2">
          Resultado:
        </label>
        <div
          id="resultado"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="border border-gray-300 p-2 text-lg font-bold text-center mb-4"
        >
          {resultado}
        </div>
      </div>
    );
  }
  