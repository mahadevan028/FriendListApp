import React from 'react'
import './Input_Field_Styles.css'

function Input_Field_Component({input,onInputCallback, onChangeCallback}) {
    return (
      <div className="input-field">
        <div className="custom-input">
          <input
            type="text"
            className="custom-control"
            placeholder="Enter Friend Name to Add"
            aria-label="Name"
            value={input|| ""}
            onChange={(e) => onChangeCallback(e)}
            aria-describedby="enter-friend-name"
            onKeyDown={(e)=> onInputCallback(e)}
          />
          <i className="fa fa-plus"></i>
        </div>
      </div>
    );
}

export default Input_Field_Component
