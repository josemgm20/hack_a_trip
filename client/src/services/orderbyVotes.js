  // Añadido un DOM para usar todos los elementos html cargados en este proyecto
document.addEventListener('DOMContentLoaded', function() {
  const listaPost = document.getPostById('listaPost');
  const ordenarButton = document.getPostById('ordenarButton');

  ordenarButton.addEventListener('click', function() {
      const post = Array.from(listaPost.getPostByTagName('li'));

      // Esto ordena los post por la cantidad de votos en orden descendente
      post.sort(function(a, b) {
          const votosA = parseInt(a.getAttribute('data-votos'));
          const votosB = parseInt(b.getAttribute('data-votos'));

          return votosB - votosA;
      });

      // Vacía la lista
      while (listaPost.firstChild) {
          listaPost.removeChild(listaPost.firstChild);
      }

      // Aqui se agrega los post ordenados de nuevo a la lista
      post.forEach(function(post) {
          listaPost.appendChild(post);
      });
  });
});
