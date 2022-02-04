import React from 'react';
import "./StyledTextArea.css"
const ScrollTextArea = () => {
  return (
      <>
        <div className = "textarea_style">
            <textarea
                class="textarea"
                id="textarea"
                name ="textarea_discription"
                rows= "6"
                cols = "37"
                // maxLength="100"
            >

            </textarea>
        </div>
      </>
  );
};

export default ScrollTextArea;
