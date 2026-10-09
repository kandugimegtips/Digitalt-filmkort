async function hentFilm() {
  try {
    const response = await fetch('https://whoa.onrender.com/whoas/random');
   
    if (!response.ok) {
      throw new Error(`Feil fra API: ${response.status}`);
    }
 
    const data = await response.json();
    const film = data[0];
 
   
    document.getElementById('plakat').src = film.poster;
    document.getElementById('tittel').textContent = film.movie;
    document.getElementById('aar').textContent = film.year;
    document.getElementById('regissor').textContent = film.director;
    document.getElementById('rolle').textContent = film.character;
    document.getElementById('tid').textContent = film.timestamp;
    document.getElementById('sitat-tekst').textContent = film.full_line || film.phrase;
   
   
    document.getElementById('video').src = film.video['720p'] || film.video['360p'];
 
  } catch (error) {
    console.log('Noe gikk galt:', error.message);
  }
}
 
 
hentFilm();