import React from 'react';
import ReactDOM from 'react-dom';
var Preset = require('./cloudinary');
var Dropzone = require('react-dropzone');

// import statements

var CLOUDINARY_UPLOAD_PRESET = Preset.name;
var CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';

 
var DropzoneDemo = React.createClass({
    getInitialState: function () {
        return {
          files: []
        };
    },
 
    onDrop: function (acceptedFiles) {
      this.setState({
        files: acceptedFiles
      });
    },

    onDropAccepted(files) {
        this.setState({
            files,
            showError: false
        });
    },

    onDropRejected() {
        this.setState({
            showError: true
        });
    },
 
    onOpenClick: function () {
      this.dropzone.open();
    },
 
    render: function () {

        return (
            <div>
                <Dropzone
                onDropAccepted={this.onDropAccepted}
                onDropRejected={this.onDropRejected} 
                multiple={false}
                accept="image/*"
                maxSize={3145728}
                ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                    <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                                      {
            this.state.showError && <p>File is larger than 3Mb</p>
          }
            </div>
        );
    }
});
 
module.exports = DropzoneDemo;
