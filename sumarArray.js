// Pre: recibe un arreglo de números
// Post: devuelvo un número que es la suma total del arreglo
function sumatoriaBajoImporte(arreglo) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    console.log("Vuelta nro " + parseInt(i + 1));
    console.log("valor de i = " + i);
    console.log("valor de resultado antes de sumar: " + resultado);
    console.log("valor de arreglo[i]: " + arreglo[i]);
    resultado = resultado + arreglo[i];
    console.log("valor de resultado dsp de sumar " + resultado);
    console.log();
  }
  return resultado;
}

let array = [500, 50, 100, 500, 10, 500];

let sumaDelArray = sumatoriaBajoImporte(array);

console.log(sumaDelArray);
