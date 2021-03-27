const bookCards = (array) => {
  document.querySelector('#card-container').innerHTML = '';

  array[0].forEach((book) => {
    document.querySelector('#card-container').innerHTML += `
    <div class="card bookCard" id="book-card^^${book.id}" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${book.name}</h5>
    <div id="chapters-body"></div>
  </div>
</div>`;
  });
};

export default bookCards;
