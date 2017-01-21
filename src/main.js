import React from 'react';
import ReactDOM from 'react-dom';
var DropzoneDemo = require('./dropDemo');

var Main = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-md-6">
					<DropzoneDemo />
				</div>
				<div className="col-md-6">
					<DropzoneDemo />
				</div>
			</div>
			)
	}

})

module.exports = Main;