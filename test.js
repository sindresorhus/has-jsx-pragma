'use strict';
var test = require('ava');
var hasJsxPragma = require('./');

test(function (t) {
	t.assert(hasJsxPragma('\n/** @jsx React.DOM */\n\nvar foo = true;'));
	t.assert(hasJsxPragma('\n/** \n\n @jsx React.DOM \n\n */\n\nvar foo = true;'));
	t.assert(hasJsxPragma('\n/** @jsx */\n\nvar foo = true;'));
	t.assert(!hasJsxPragma('\n/* \n\n@jsx React.DOM \n\n*/\n\nvar foo = true;'));
	t.end();
});
