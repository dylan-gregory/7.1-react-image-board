var React = require('react');
var ReactDOM = require('react-dom');

var ImageCollection = require('./models/image.js').ImageCollection;
var PhotoAddForm = require('./components/form.jsx').PhotoAddForm;
var ImageBoard = require('./components/listing.jsx').ImageBoard;

ReactDOM.render(
  React.createElement(ImageBoard),
  document.getElementById('app')
);
