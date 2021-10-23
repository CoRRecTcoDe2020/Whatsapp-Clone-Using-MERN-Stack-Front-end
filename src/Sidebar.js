import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        // BEM
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/77756002?s=400&u=59054266627a893b1b93958d525347f07c0fa170&v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                      <ChatIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input type="text" placeholder="Search or start new chat" />
              </div>
            </div>

            <div className="sidebar__chats">
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;