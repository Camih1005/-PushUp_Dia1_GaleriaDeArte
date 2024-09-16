// script.js
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});





fetch('./json.json')
  .then(response => response.json())
  .then(data => {
    let cardsContainer = document.querySelector(".cards");

    data.forEach(item => {
      cardsContainer.innerHTML += `
        <div class="card">
          <img src="${item.imagen}" alt="${item.nombre}">
          <h2>${item.nombre}</h2>
          <p>Fecha: ${item.fecha}</p>
          <p>Autor: ${item.autor}</p>
        </div>
      `;
    }

);
console.log(data)
  });

  