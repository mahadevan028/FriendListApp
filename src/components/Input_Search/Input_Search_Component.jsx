import React from 'react';
import './Input_Search_Styles.css';

function Input_Search_Component({searchFriendCallback}) {
    return (
      <div>
        <div className="container col-lg-8">
          <div className="row">
            <div className="col-lg-12">
                <i title="Search" className="fa fa-search"></i>
                <input
                  className="col-sm-12 form-control"
                  type="text"
                  placeholder="Search Friends"
                  onChange={(e) => searchFriendCallback(e)}
                />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Input_Search_Component
