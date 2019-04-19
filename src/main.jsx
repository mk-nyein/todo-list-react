var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="ToDo List" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Plan List" headingColor="orange"/>, document.getElementById('plan'));
ReactDOM.render(<ListManager title="Done List" headingColor="green"/>, document.getElementById('done'));

