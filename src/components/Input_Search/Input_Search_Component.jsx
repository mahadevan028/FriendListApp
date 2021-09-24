import React from 'react';
import './Input_Search_Styles.css';

function Input_Search_Component({searchFriendCallback}) {
    return (
      <div>
        <div className="container">
          
                <i title="Search" className="fa fa-search"></i>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Friends"
                  onChange={(e) => searchFriendCallback(e)}
                />
           
        </div>
      </div>
    );
}

export default Input_Search_Component
