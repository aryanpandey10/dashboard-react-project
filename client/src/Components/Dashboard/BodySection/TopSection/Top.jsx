import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import {  BsQuestionCircle } from 'react-icons/bs'
import img from '../../../../Assets/gilbert.jpg'
// import img2 from '../../../../Assets/images (2).png' BsArrowRightShort
// import video from '../../../../Assets/video.mp4'

const Top = () => {
  const headStyle ={
    color: "#ED1D24"
  }
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to <span style={headStyle}>Technomine</span></h1>
          <p>Hello Aryan, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top