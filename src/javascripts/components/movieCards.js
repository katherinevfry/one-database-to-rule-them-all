const movieCards = (array) => {
  document.querySelector('#card-container').innerHTML = '';

  array[0].forEach((item) => {
    document.querySelector('#card-container').innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"> Budget: ${item.budgetInMillions}M</p>
    <p class="card-text">Box Office Revenue: ${item.boxOfficeRevenueInMillions}M</p>
    <p class="card-text">Academy Award Nominations: ${item.academyAwardNominations}</p>
    <p class="card-text">Academy Award Wins: ${item.academyAwardWins}</p>
    <p class="card-text">Rotten Tomatoes Score: ${item.rottenTomatesScore}%</p>
  </div>
</div>`;
  });
};

export default movieCards;
