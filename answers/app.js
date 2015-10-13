/* This code is for using React at front-end */

var React = require('react');

// passing TodoBox from index.jsx
var TodoBox = require('./views/index.jsx');

// passing data from server that are passed in the id of initial-data to the element that has the id of app
var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<TodoBox data={data} />, document.getElementById("app"));
