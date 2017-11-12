import React, { Component } from 'react';
import logo from './logo.svg';
import ReactMarkdown from 'react-markdown';

import './App.css';

class App extends Component {
  getInitialState() {
	return {
		content: '### Type Markdown Here'
  	}
  }
  rawMarkup() {
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false,
		highlight: function (code) {
			return hljs.highlightAuto(code).value
		}
	})

	var rawMarkup = marked(this.state.content, {sanitize: true})
	return {
		__html: rawMarkup
	}
}
  render() {
    return (
      <div className="container-fluid">
  			<div className="row">
  				<h1 className="text-center">
  					ReactJS Markdown Editor
  				</h1>
  				<div className="col-xs-12 col-sm-6">
  					<h3>Markdown</h3>
  					<textarea id="markdown" className="markdown" defaultValue={this.getInitialState().content}></textarea>
  				</div>
  				<div className="col-xs-12 col-sm-6">
  					<h3>Preview</h3>
  					<div id="preview" dangerouslySetInnerHTML={this.rawMarkup()}></div>
  				</div>
  			</div>
		  </div>
	)
  }
}

export default App;
