function sumatoriaBajoImporte(arreglo) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 0 && arreglo[i] < 1000) {
      resultado = resultado + arreglo[i]; // resultado += arreglo[i];
    }
  }
  return resultado;
}
