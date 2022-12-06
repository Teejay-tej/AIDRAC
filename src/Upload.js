import './upload.css'
import React, { Component } from "react";
import axios from 'axios';



class Upload extends Component {

  state = { selectedFile: null }

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
}

   uploadHandler = () => {
      const formData = new FormData()
      formData.append(
        'myFile',
        this.state.selectedFile,
        this.state.selectedFile.name
      )
      axios.post('http://127.0.0.1:5000/api/extract', formData, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded / progressEvent.total)
        }
      })
    }
  

     render() {
         return(
             <div className= "upload">
              <input type="file" onChange={this.fileChangedHandler}/>
              <button onClick={this.uploadHandler}>Upload!</button>
             </div>
         
         )
     }
}

export default Upload;