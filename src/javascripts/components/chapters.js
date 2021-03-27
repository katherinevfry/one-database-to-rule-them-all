const showChapters = (array) => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = `
  <card id="chapter-card">
  <ul id="list"></ul>
  </card>`;

  array[0].forEach((chapter) => {
    document.querySelector('#list').innerHTML += `
    <h6>"${chapter.chapterName}"</h6>`;
  });
};

export default showChapters;
