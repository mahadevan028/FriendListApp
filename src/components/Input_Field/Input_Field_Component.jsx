import React from 'react'
import './Input_Field_Styles.css'

function Input_Field_Component({input,onInputCallback, onChangeCallback}) {
    return (
      <div className="input-field">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Friend Name to Add"
            aria-label="Name"
            value={input|| ""}
            onChange={(e) => onChangeCallback(e)}
            aria-describedby="enter-friend-name"
            onKeyDown={(e)=> onInputCallback(e)}
          />
        </div>
      </div>
    );
}

export default Input_Field_Component
