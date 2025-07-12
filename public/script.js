document.getElementById('cat-button').addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const catUrl = data[0].url;
      document.getElementById('cat-img').src = catUrl;
    })
    .catch(error => {
      console.error('Erro ao buscar gatinho:', error);
    });
});