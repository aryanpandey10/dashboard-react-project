import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../../Assets/logo.png'
// import img1 from '../../../Assets/images (9).png'
// import img2 from '../../../Assets/images (8).png'
// import img3 from '../../../Assets/images (10).png'
import user1 from '../../../../Assets/aldi.jpg'
import user2 from '../../../../Assets/dadang.jpg'
import user3 from '../../../../Assets/gilbert.jpg'
import user4 from '../../../../Assets/aldi.jpg'

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Projects</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Project 1</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Project 2</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Project3</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Project4</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Task Allocated</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src='' alt="Img" />
              <img src='' alt="Img" />
              <img src='' alt="Img" />
              <img src='' alt="Img" />
            </div>
            <div className="cardText">
              <span>
                Task 1 <br />
                <small>
                  Task 2 <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Query</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            {/* <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div> */}
            <div className="cardText">
              <span>
                Query1 <br />
                {/* <small>
                  26 Sellers <span className="date">31 Days</span>
                </small> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing