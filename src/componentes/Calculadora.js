import { useRef, useState } from "react";
import BotonOperacion from "./BotonOperacion";
import BotonLimpiador from "./BotonLimpiador";
import Resultado from "./Resultado";
import InputNumero from "./InputNumero";

export function Calculadora() {
  const inputRef = useRef(null);
  let [resultado, setResultado] = useState(0);

  function operacion(e, operacion) {
    e.preventDefault();
    let valorInput = Number(inputRef.current.value);
    switch (operacion) {
      case "sumar":
        setResultado((resultado += valorInput));
        break;
      case "restar":
        setResultado((resultado -= valorInput));
        break;
      case "multiplicar":
        setResultado((resultado *= valorInput));
        break;
      case "dividir":
        valorInput === 0
          ? alert("Ingresa un número mayor a 0")
          : setResultado((resultado /= valorInput));
        break;
      default:
        break;
    }
  }

  function limpiar(e, lugar) {
    e.preventDefault();
    switch (lugar) {
      case "resultado":
        setResultado(0);
        break;
      case "campo":
        inputRef.current.value = "";
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50">
      <div className="calculator bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">
          Calculadora Simple 👾
        </h1>
        <form>
          <Resultado resultado={resultado} />
          <InputNumero inputRef={inputRef} />

          {/* Botones - Operadores */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <BotonOperacion
              handleClick={(e) => operacion(e, "sumar")}
              texto="Sumar"
            />
            <BotonOperacion
              handleClick={(e) => operacion(e, "restar")}
              texto="Restar"
            />
            <BotonOperacion
              handleClick={(e) => operacion(e, "multiplicar")}
              texto="Multiplicar"
            />
            <BotonOperacion
              handleClick={(e) => operacion(e, "dividir")}
              texto="Dividir"
            />
          </div>

          {/* Botones - Limpiadores */}
          <div className="grid grid-cols-1 gap-2">
            <BotonLimpiador
              handleClick={(e) => limpiar(e, "resultado")}
              texto="Limpiar Resultado"
            />
            <BotonLimpiador
              handleClick={(e) => limpiar(e, "campo")}
              texto="Limpiar Campo"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculadora;
