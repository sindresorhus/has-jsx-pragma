import test from 'ava';
import m from './';

test(t => {
	t.true(m('\n/** @jsx React.DOM */\n\nvar foo = true;'));
	t.true(m('\n/** \n\n @jsx React.DOM \n\n */\n\nvar foo = true;'));
	t.true(m('\n/** @jsx */\n\nvar foo = true;'));
	t.false(m('\n/* \n\n@jsx React.DOM \n\n*/\n\nvar foo = true;'));
});
