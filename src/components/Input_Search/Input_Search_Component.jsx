import React from 'react'

function Input_Search_Component({searchFriendCallback}) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
                <i className="fa fa-search"></i>
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
