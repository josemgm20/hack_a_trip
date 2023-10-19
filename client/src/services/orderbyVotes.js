
const recomendacion = [
    { nombre: "Post A", votos: 10 },
    { nombre: "Elemento B", votos: 5 },
    { nombre: "Elemento C", votos: 15 },
    { nombre: "Elemento D", votos: 8 },
  ];

  // Función de comparación para ordenar por votos
function compararPorVotos(a, b) {
    return b.votos - a.votos;
  }
  
  // Arreglo para ordenar los votos
  elementos.sort(compararPorVotos);
  
  console.log(elementos);