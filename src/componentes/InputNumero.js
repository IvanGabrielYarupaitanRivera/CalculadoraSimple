export default function InputNumero({ inputRef }) {
    return (
      <div>
        <label htmlFor="numeroInput" className="block text-green-600 mb-2">
          Ingrese un número:
        </label>
        <input
          id="numeroInput"
          ref={inputRef}
          type="number"
          aria-label="Ingrese un número"
          aria-describedby="instrucciones-numero"
          placeholder="Ejemplo: 123"
          className="border border-gray-300 p-2 rounded mb-4 block w-full"
        />
      </div>
    );
  }