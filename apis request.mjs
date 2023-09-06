// PokeApi
fetch('https://pokeapi.co/api/v2/pokemon/1/')
  .then(response => response.json())
  .then(data => {
    console.log(`Nombre del Pokémon: ${data.name}`);
    console.log('Tipos:');
    for (const type of data.types) {
      console.log(type.type.name);
    }
  })
  .catch(error => console.error('Error:', error));


  // Open Library
  function peticionLibro(busqueda) {
    fetch(`http://openlibrary.org/search.json?q=${busqueda}`)
      .then(response => response.json())
      .then(data => {
        const primerLibro = data.docs[0];
        if (primerLibro) {
          console.log(`Título del libro: ${primerLibro.title}`);
          console.log(`Autores: ${primerLibro.author_name}`);
        } else {
          console.log('Libro no encontrado.');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  peticionLibro('i robot');

  
  // Open Library Search
  function peticionLibrosPorAutor(autor) {
    fetch(`http://openlibrary.org/search.json?author=${autor}`)
      .then(response => response.json())
      .then(data => {
        const libros = data.docs.map(libro => libro.title);
        console.log(`Libros de ${autor}: ${libros.join(', ')}`);
      })
      .catch(error => console.error('Error:', error));
  }
  
  peticionLibrosPorAutor('Isaac Asimov');

  
// Coldplay
fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
  .then(response => response.json())
  .then(data => {
    const banda = data.artists[0];
    console.log(`Nombre de la banda: ${banda.strArtist}`);
    console.log(`Género: ${banda.strGenre}`);
  })
  .catch(error => console.error('Error:', error));


// Swapi
fetch('https://swapi.co/api/people/1/')
  .then(response => response.json())
  .then(data => {
    console.log(`Nombre del personaje: ${data.name}`);
    console.log('Películas en las que aparece:');
    for (const film of data.films) {
      fetch(film)
        .then(response => response.json())
        .then(filmData => {
          console.log(filmData.title);
        });
    }
  })
  .catch(error => console.error('Error:', error));


// Asteroids
const fechaHoy = new Date();
const fechaAyer = new Date(fechaHoy);
fechaAyer.setDate(fechaHoy.getDate() - 1);
const fechaHaceUnaSemana = new Date(fechaHoy);
fechaHaceUnaSemana.setDate(fechaHoy.getDate() - 7);

const apiKey = '4Gyzb4LOCuQNOvtBkueq8K1WRtzgDgmcExez5oZX'; 

fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaHaceUnaSemana.toISOString().split('T')[0]}&end_date=${fechaAyer.toISOString().split('T')[0]}&api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const asteroidesPeligrosos = data.near_earth_objects[fechaAyer.toISOString().split('T')[0]];
    console.log('Asteroides potencialmente peligrosos para la Tierra:');
    for (const asteroide of asteroidesPeligrosos) {
      console.log(`Nombre: ${asteroide.name}`);
    }
  })
  .catch(error => console.error('Error:', error));
