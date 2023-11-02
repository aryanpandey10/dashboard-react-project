import React from 'react';
import './FourWidget.css'; // Import your CSS file

const FourWidget = () => {
  return (
    <div className="dashboard-container">
      {/* Attendance Card */}
      <div className="widget-card">
        <div className="card-header">
          <i className="fas fa-user-clock"></i>
          <h2>Attendance</h2>
        </div>
        <div className="card-content">
          <p>Employee In Time: 9:00 AM</p>
          <p>Employee Out Time: 5:00 PM</p>
          <p>Status: On Time</p>
          <a href="attendance-page.html">View Attendance</a>
        </div>
      </div>

      {/* Birthday Card */}
      <div className="widget-card birthday-card">
        <div className="card-header">
          <i className="fas fa-birthday-cake"></i>
          <h2>Birthday</h2>
        </div>
        <div className="card-content">
          {/* Added nearby users */}
          <div className="nearby-user">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Employee Photo" />
            <div className="user-info">
              <h5>Samir Panchal</h5>
              <p>SDE</p>
            </div>
            <button className="btn btn-primary pull-right">Wish</button>
          </div>
          <div className="nearby-user">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Employee Photo" />
            <div className="user-info">
              <h5>Parth Patel</h5>
              <p>SEO</p>
            </div>
            <button className="btn btn-primary pull-right">Wish</button>
          </div>
          {/* End of nearby users */}
        </div>
      </div>

      {/* Work Anniversary Card */}
      <div className="widget-card work-anniversary-card">
        <div className="card-header">
          <i className="fas fa-trophy"></i>
          <h2>Work Anniversary</h2>
        </div>
        <div className="card-content nearby-users">
          {/* Work anniversary nearby users */}
          <div className="nearby-user">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Employee Photo" />
            <div className="user-info">
              <h5>Samir Panchal</h5>
              <p>SDE</p>
            </div>
            <button className="btn btn-primary pull-right">Wish</button>
          </div>
          <div className="nearby-user">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Employee Photo" />
            <div className="user-info">
              <h5>Parth Patel</h5>
              <p>SEO</p>
            </div>
            <button className="btn btn-primary pull-right">Wish</button>
          </div>
          {/* Add more work anniversary nearby users as needed */}
        </div>
      </div>

      {/* Announcement Card */}
      <div className="widget-card announcement-card">
        <div className="card-header">
          <i className="fas fa-bullhorn"></i>
          <h2>Announcements</h2>
        </div>
        <div className="card-content">
          <ul className="announcement-list">
            <li>Important announcement 1</li>
            <li>Important announcement 2</li>
            <li>Important announcement 3</li>
            {/* Add more announcements as needed */}
          </ul>
          <button className="view-all-button">View All</button>
        </div>
      </div>
    </div>
  );
};

export default FourWidget;
