import './upload.css'
import React, { Component } from "react";
import axios from 'axios';



class Upload extends Component {

  state = { selectedFile: null }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    alert("Image uploaded successfully !");
    const formData = new FormData()
    formData.append(
      'image',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    const res = axios.post('http://127.0.0.1:5000/api/extract', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    );
    console.log(res);
  }


  render() {
    return (
      <div className="upload">
        <input type="file" onChange={this.fileChangedHandler} />
        <button id="uploadbtn" onClick={this.uploadHandler}>Upload!</button>
      </div>

    )
  }
}

export default Upload;