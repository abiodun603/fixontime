import React from 'react';
import "./StyledFile.css"

const File = () => {
  return (
      <>
        <div className= "file-upload-wrapper" data-text = "select your file!">
            <input type="file" id = "customFile" className='file'/>
            <label htmlFor ="customFile" className = "fileButton" >Browse</label>
        </div>
        <div>

        </div>

      </>
      
  );
};

export default File;
