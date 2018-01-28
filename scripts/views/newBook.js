'use strict';

pageLoad();

$('#newBookForm').on('submit', function(e) {
  e.preventDefault();
  //captures from data
  let data = {
    author: e.target.author.value,
    title: e.target.title.value,
    isbn: e.target.isbn.value,
    image_url: e.target.image_url.value,
    description: e.target.description.value,
  }

  //AJAX CALL HERE TO POST TO DB

});

function pageLoad() {
  $.get('/db/books')
  .then(function(data) {
    console.log('pageLoad data from db/books', data);
  });

}