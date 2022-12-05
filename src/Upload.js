import React from 'react';
import styled from 'styled-components';
import './upload.css'
const Button = styled.button`
  /* Insert your favorite CSS code to style a button */

`;
const Upload = props => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <div id="buttons">
      <button class="button1" onClick={handleClick}>
        <h1>Upload</h1>
      </button>
      <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
    </div>
    
  );
};

export default Upload;

/*import React, { useState, useRef } from "react";
import './upload.css'

const Upload = (props) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <input type="file"
    accept="image/*"
    style={{ display: 'none' }}
    id="contained-button-file"
    />
    <label htmlFor="contained-button-file">
        <button variant="contained" color="primary" component="span">
          Upload
        </button>
      </label>

)
}
export default Upload;

import React, { useState, useRef } from "react";
import './upload.css'

const Upload = (props) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <div className="upload">
   <input type="file" ref={fileInputField} />
   </div>
  )
}

export default Upload;*/