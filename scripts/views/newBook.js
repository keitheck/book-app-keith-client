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

  $.post(`${__API_URL__}/books`, data)
    .then(function() {
      pageLoad();
    })
    .catch(function(err) {
      console.error("newbookform error", err);
      pageLoad();
    });
    $('#newBookForm').each(function() {
      this.reset();
    });
    
  //AJAX CALL HERE TO POST TO DB

});


// this AJAX request asks server for DB to respond with all book data
function pageLoad() {
  $.get(`${__API_URL__}/books`)
  .then(function(data) {
    console.log('pageLoad data from db/books', data);
    // $('#results').empty();
  });

}