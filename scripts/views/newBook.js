'use strict';

var app = app || {};

var __API_URL__ = 'https://my-book-app-server.herokuapp.com'; 

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
  $.get(`${__API_URL__}`)
  .then(function(data) {
    console.log('pageLoad data from db/books', data);
  });

}