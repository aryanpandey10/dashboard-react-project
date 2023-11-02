import React from 'react';
import './Sidebar.css'
import logo from './image';

const Sidebar = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                            <img src={logo} alt="Technomine Logo" />
                        </span>
                        <span className="title" style={{ fontSize: '24px' }}>Technomine</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Home</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="title">Me</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="file-tray-outline"></ion-icon>
                        </span>
                        <span className="title">Inbox</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">My Team</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="wallet-outline"></ion-icon>
                        </span>
                        <span className="title">My Finance</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="business-outline"></ion-icon>
                        </span>
                        <span className="title">Organisation</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
