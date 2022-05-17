import React from 'react';
import "./StyledTextArea.css"
const ScrollTextArea = (props) => {
  return (
      <>
        <div className = "textarea_style">
            <textarea
                className="textarea"
                id="textarea"
                name ="content"
                rows= "6"
                // cols = "37"
                value = {props.value}
                onChange={props.onChange}
            >

            </textarea>
        </div>
      </>
  );
};

export default ScrollTextArea;
