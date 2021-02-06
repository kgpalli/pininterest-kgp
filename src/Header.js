import React, {useState} from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import db from './firebase'




import './Header.css'
import { KeyboardArrowDown } from '@material-ui/icons';

function Header(props) {
    const[input,setInput] = useState("")

    console.log(props , "Props in Header.js")
 const onSearchSubmit =(e) => {
        e.preventDefault()
       props.onSubmit(input)
        db.collection('terms').add({
            term: input,
        });

    };
    return (
   
        <div className="header_wrapper">
        <div className="header_logo">
            <IconButton>
                <PinterestIcon />
            </IconButton>
        </div>
        <div className="header_button homePage">
            <a href="/">Homepage</a>
        </div>
        <div class="header_button following">
        <a href="/"> Following</a>
        </div>
<div className="header_search">
<div className="header_searchContainer">
   <IconButton>
    <SearchIcon />
   </IconButton>
    <form>
        <input type="text" onChange={(e) => setInput(e.target.value)}/>
        <button type="submit" onClick={onSearchSubmit}>Submit</button>
    </form>
 </div>
 </div>
    <div className="header_menuItems">
    <IconButton>
     <NotificationsIcon />
    </IconButton>
    <IconButton>
     <TextsmsIcon />
    </IconButton>
    <IconButton>
     <FaceIcon />
    </IconButton>
    <IconButton>
    <KeyboardArrowDownIcon />
   </IconButton>
    </div>
    </div>
  

);
}

export default Header
