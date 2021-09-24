import React, {useState} from 'react';
import './Friends_List_Page_Styles.css';
import InputFieldComponent from './../Input_Field/Input_Field_Component.jsx';
import FriendsList from './../Friends_List/Friends_List_Component.jsx';
import DeleteConfirmationModal from './../Delete_Friend_Confirmation/Delete_Friend_Confirmation_Component.jsx';
import InputSearch from './../Input_Search/Input_Search_Component.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './../Pagination/Pagination_Component.jsx';
const initialData = [
    {key:1, name:'Rahul Gupta', isFavorite:false},
    {key:2,name:'Shivangi Sharma', isFavorite:true},
    {key:3,name:'Akash Singh', isFavorite:false}]


const evaluatePageNumbers = (arrayListLength) => {
  return [...Array((arrayListLength)%4===0? (arrayListLength)/4 : Math.floor(1+(arrayListLength)/4)).keys()]
}    

function Friends_List_Page_Component() {
    const [friends, setFriends] = useState(initialData)
    const [friendListDataFinal, setFriendListDataFinal] = useState(initialData) 
    const [showModal, setShowModal] = useState(false)
    const [key,setKey] = useState(0)
    const [inputValue,setInputValue] = useState("")
    const [info, setInfo] = useState({})
    const [selectedPage, setSelectedPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([0]);


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
            setFriendListDataFinal(prevProps => [...prevProps,obj])
            
            toast("Friend Added Successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              type:'success',
              theme:'dark'});

            }else{
              toast("Invalid Input", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                type:'error',
                theme:'dark'});
            } 
            setTimeout(() => setPageNumbers(evaluatePageNumbers(friends.length+1)))       
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
            const obj =  { ...item, isFavorite: !item.isFavorite };
            if(obj.isFavorite===true){
              toast("Added to Favourites", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                type:'success',
                theme:'dark'});
            }else{
              toast("Removed from Favourites", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                type:'success',
                theme:'dark'});
            }
            return obj;
            
          } else {
            return item;
          }
        })
      );
         setFriendListDataFinal((prevProps) =>
         prevProps.map((item) => {
           if (item.key === keyValue) {
             return { ...item, isFavorite: !item.isFavorite };
           }else{
             return item
           }
          }))
    };

    const handleCloseCallback = () => {
        setShowModal(false);
    }

    const handleDeleteCallback = () => {
        setFriends(prevProps => prevProps.filter(item => item.key !== key))
        setFriendListDataFinal(prevProps => prevProps.filter(item => item.key !== key));
        setShowModal(false);
        setPageNumbers(evaluatePageNumbers(friends.length-1))
        toast("Friend Deleted Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          type:'success',
          theme:'dark'});
    }

    const searchFriendCallback = (event) => {
      if(!!event.target.value){
      setFriends((prevProps) =>
        prevProps.filter((item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
      setPageNumbers(evaluatePageNumbers(friends.length))
      setSelectedPage(1)
      }else {
        setFriends(friendListDataFinal)
        setPageNumbers(evaluatePageNumbers(friendListDataFinal.length))
      }      
    };
    
    const onNextCallback = () => {
      setSelectedPage(prevProps => prevProps + 1)
    }
    
    const onPreviousCallback = () => {
      setSelectedPage(prevProps => prevProps - 1)
    }

    const onSetPageCallback = (item) => {
          setSelectedPage(item);
    }

    return (
      <div className="center-input padding-top-10">
        <div className="card card-shadow">
          <div
            className="card-header container text-start"
            style={{ display: "flex" }}
          >
            <div id="header" style={{ flexGrow: "1" }}>
              Friends List
            </div>
            <div style={{ flexGrow: "0" }}>
              <InputSearch searchFriendCallback={searchFriendCallback} />
            </div>
          </div>
          <div className="card-body">
            <div className="col-lg-12">
              <InputFieldComponent
                input={inputValue}
                onInputCallback={onNameInputCallback}
                onChangeCallback={onChangeCallback}
              />
            </div>
            <FriendsList
              list={friends}
              deleteFriend={deleteFriendHandler}
              favouriteFriend={favouriteFriendHandler}
              selectedPage={selectedPage}
            />
            {showModal ? (
              <DeleteConfirmationModal
                show={showModal}
                friendInfo={info}
                handleClose={handleCloseCallback}
                handleDelete={handleDeleteCallback}
              />
            ) : null}
          </div>
          <Pagination
            onPreviousCallback={onPreviousCallback}
            pageNumbers={pageNumbers}
            onSetPageCallback={onSetPageCallback}
            selectedPage={selectedPage}
            onNextCallback={onNextCallback}
          />
        </div>

        <ToastContainer />
      </div>
    );
}

export default Friends_List_Page_Component
