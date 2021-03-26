const navBar = () => {
  document.querySelector('#navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lord of the Rings</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" id="#character-page" aria-current="page" href="#">Characters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="movie-page" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="book-page" href="#">Books</a>
        </li>
      </ul>
      <span class="navbar-text">
        one database to rule them all
      </span>
    </div>
  </div>
</nav>`;
};

export default navBar;
