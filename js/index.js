document.addEventListener("DOMContentLoaded", function() {
  let dc = document.getElementById("dynamic-content");
  let er = document.getElementById("error");
  let url = "/partials/partial-1.html";

  let button = document.querySelectorAll('button');

  function pageSelector(e) {
    e.preventDefault();
    url = e.target.dataset.id;
    loadData(url);
  }

  function loadData(url) {
    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.statusText);
      })
      .then(function(data) {
        dc.innerHTML = data;
      })
      .catch(function(err) {
        er.innerHTML = err;
      });
  };

  loadData(url);

  button[0].addEventListener('click', pageSelector);
  button[1].addEventListener('click', pageSelector);
});
