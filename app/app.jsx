var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

/* Custom Components */


/* Load Foundation */
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
);
