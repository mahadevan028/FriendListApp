import React, {useState} from 'react';
import './Friends_List_Page_Styles.css';
import InputFieldComponent from './../Input_Field/Input_Field_Component.jsx';
import FriendsList from './../Friends_List/Friends_List_Component.jsx';
import DeleteConfirmationModal from './../Delete_Friend_Confirmation/Delete_Friend_Confirmation_Component.jsx';
import InputSearch from './../Input_Search/Input_Search_Component.jsx';
const initialData = [
    {key:1, name:'Rahul Gupta', isFavorite:false},
    {key:2,name:'Shivangi Sharma', isFavorite:true},
    {key:3,name:'Akash Singh', isFavorite:false}]

function Friends_List_Page_Component() {
    const [friends, setFriends] = useState(initialData)
    const [showModal, setShowModal] = useState(false)
    const [key,setKey] = useState(0)
    const [inputValue,setInputValue] = useState("")
    const [info, setInfo] = useState({})

    const onChangeCallback = (event) => {
      setInputValue(event.target.value)
    }

    const onNameInputCallback = (event) => {
        if(event.key === "Enter"){
            if(!!event.target.value){
            const obj = {};
            obj['key'] = Date.now();
            obj['name'] = event.target.value
            obj['isFavorite'] = false
            setInputValue("")
            setFriends(prevProps => [...prevProps,obj])   
            }else{
                alert('invalid input')
            }        
        }
    }

    const deleteFriendHandler = (keyValue) => {
       setShowModal(true);
       setKey(keyValue)
       setInfo(friends.find(item => item.key === keyValue))
    }

    const favouriteFriendHandler = (keyValue) => {
      setFriends((prevProps) =>
        prevProps.map((item) => {
          if (item.key === keyValue) {
            return { ...item, isFavorite: !item.isFavorite };
          } else {
            return item;
          }
        })
      );
    };

    const handleCloseCallback = () => {
        setShowModal(false);
    }

    const handleDeleteCallback = () => {
        setFriends(prevProps => prevProps.filter(item => item.key !== key))
        setShowModal(false);
    }

    const searchFriendCallback = (event) => {
      const tempData = friends;
      if(!!event.target.value){
      setFriends((prevProps) =>
        prevProps.filter((item) =>
          item.name.toLowerCase().includes(event.target.value)
        )
      );
      }else {
        setFriends(tempData)
      }
    };

    return (
      <div className="center-input">
        <div className="card card-shadow" style={{ width: "35rem",maxHeight: "35rem" }}>
          <div className="card-header container text-start d-flex">
            <div id="header" className="col-xs-4 d-inline-block">Friends List</div>
            <div className="col-sm-4 d-inline-block">
              <InputSearch searchFriendCallback = {searchFriendCallback}/></div>
            </div>
          <div className="card-body">
          <div className="col-lg-12">
            <InputFieldComponent input = {inputValue} onInputCallback={onNameInputCallback} onChangeCallback = {onChangeCallback}/>
          </div>
          <FriendsList list = {friends} deleteFriend = {deleteFriendHandler} favouriteFriend = {favouriteFriendHandler}/>
          {
          showModal ? <DeleteConfirmationModal  show={showModal}  friendInfo = {info} handleClose={handleCloseCallback} handleDelete={handleDeleteCallback}/> : null
        } 
          </div>
          
        </div>
   
      </div>
    );
}

export default Friends_List_Page_Component
