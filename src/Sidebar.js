import React from 'react';
import './Sidebar.css';
import { Avatar } from "@mui/material"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="" alt=""/>
            <Avatar className="sidebar_avatar" />
            <h2>Christopher Chen</h2>
            <h4>English Patents Director | Assistant Manager, Patents Division</h4>
        </div>
        
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Connections</p>
                <p className="sidebar_statNumber">25</p>
                <b>Grow your network</b>
            </div>
        </div>



    </div>
  )
}

export default Sidebar