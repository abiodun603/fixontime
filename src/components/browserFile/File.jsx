import React, {useRef} from 'react';
import "./StyledFile.css"

const File = ({onFileSelect}) => {
 const fileInput = useRef(null)
  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
  }

  return (
      <>
        <div className= "file-upload-wrapper" data-text = "select your file!">
            <input type="file" id = "customFile" className='file' onChange = {handleFileInput}/>
            <label htmlFor ="customFile" className = "fileButton" onClick = {e => fileInput.current && fileInput.current.click()} >Browse</label>
        </div>
      </>
      
  );
};

export default File;
