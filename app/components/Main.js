'use strict';

var React = require ('react');
var Header = require('./Header/Header');
var MainContent = require('./Content/MainContent');

var Main = React.createClass({
  render(){
    return (
      <div className="container">
        <Header /> 
        <MainContent />
      </div>
    );
  }
});

module.exports = Main;