import React, { useState } from "react";
import { Box,  IconButton, Card, CardContent, Grid, Avatar } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";

import { TbEyeCheck } from "react-icons/tb";
import { PiUsersFill } from "react-icons/pi";







const UserManagement = () => {
  const [showCards, setShowCards] = useState(true);

  const toggleCardsVisibility = () => {
    setShowCards(!showCards);
  };
const UserContainer = styled.div`
  color: #fff;
 
  margin-left: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0rem 2rem;

   @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
const initialActiveUsers = [
  {
    id: 1,
    action: "view",
    date: "10/11/2023",
    name: "Jasmine Smith",
    email: "jasmine.23@example.com",
    status: "tap to block",
    phone: "(512) 555-1234",
    deviceId: "239878",
  },
  {
    id: 2,
    action: "view",
    date: "10/11/2023",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "tap to block",
    phone: "(512) 555-5678",
    deviceId: "123456",
  },
];

const initialBlockedUsers = [
  {
    id: 3,
    action: "view",
    date: "10/11/2023",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    status: "tap to unblock",
    phone: "(512) 555-9876",
    deviceId: "654321",
  },
];

// States for tabs, search query, active users, and blocked users
const [tab, setTab] = useState(0);
const [searchQuery, setSearchQuery] = useState("");
const [activeUsers, setActiveUsers] = useState(initialActiveUsers);
const [blockedUsers, setBlockedUsers] = useState(initialBlockedUsers);

// Handle tab switching
const handleTabChange = (newValue) => {
  setTab(newValue);
  setSearchQuery("");
};

// Handle blocking a user
const handleBlockUser = (userId) => {
  const userToBlock = activeUsers.find((user) => user.id === userId);
  if (userToBlock) {
    setActiveUsers(activeUsers.filter((user) => user.id !== userId));
    setBlockedUsers([...blockedUsers, { ...userToBlock, status: "tap to unblock" }]);
  }
};

// Handle unblocking a user
const handleUnblockUser = (userId) => {
  const userToUnblock = blockedUsers.find((user) => user.id === userId);
  if (userToUnblock) {
    setBlockedUsers(blockedUsers.filter((user) => user.id !== userId));
    setActiveUsers([...activeUsers, { ...userToUnblock, status: "tap to block" }]);
  }
};

// Filter users based on search query
const filteredUsers =
  tab === 0
    ? activeUsers.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blockedUsers.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
   <UserContainer>
     <Box sx={{ padding: 2, backgroundColor: "#f1f5f9", borderRadius: 2,border: '1px solid #7CACFF' }}>
      
      <Box display="flex"alignItems="center">
        <h6 style={{color:'#26344E', fontSize:'1.25rem', padding:"10px 0px", }}>User Management</h6>
        <IconButton onClick={toggleCardsVisibility} aria-label="Toggle visibility">
          {showCards ? <Visibility style={{color:'#26344E'}}/> : <VisibilityOff style={{color:'#26344E'}} />}
        </IconButton>
      </Box>

      {/* Cards */}
      {showCards && (
        <Grid container spacing={2}>
          {/* New Users Card */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
                  <div>
                    <h5 style={{color:'#26344E', fontSize:'1.25rem', fontWeight:'500'}}>New Users</h5>
                    <p style={{color:'#26344E', fontSize:'1.1rem',}}> <i>(in a week )</i> </p>
                    <h3 style={{color:'#1F263E', fontSize:'1.5rem', fontWeight:'700'}} >1200</h3>
                  </div>
                  <Avatar style={{background:'#26344E'}}></Avatar>
                </div>
               
              </CardContent>
            </Card>
          </Grid>

          {/* Registered Users Card */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
              <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
                  <div>
                    <h5 style={{color:'#26344E', fontSize:'1.25rem', fontWeight:'500'}}>Registered Users</h5>
                    <p style={{color:'white', fontSize:'1.1rem',}}> <i>(in a week )</i> </p>
                    <h3 style={{color:'#1F263E', fontSize:'1.5rem', fontWeight:'700'}}>2600</h3>
                  </div>
                  <Avatar style={{background:'#26344E'}}><PiUsersFill style={{fontSize:'1.8rem'}} /></Avatar>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* Active Users Card */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
              <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
                  <div>
                    <h5 style={{color:'#26344E', fontSize:'1.25rem', fontWeight:'500'}}>Active Users</h5>
                    <p style={{color:'#26344E', fontSize:'1.1rem',}}> <i>(in a week )</i> </p>
                    <h3 style={{color:'#1F263E', fontSize:'1.5rem', fontWeight:'700'}}>2500</h3>
                  </div>
                  <Avatar style={{background:'#26344E'}}><TbEyeCheck /></Avatar>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
    <div>
      {/* Tabs for switching between Active and Blocked Users */}
      <div>
        <button onClick={() => handleTabChange(0)} style={{ marginRight: 10 }}>
          Active Users
        </button>
        <button onClick={() => handleTabChange(1)}>Blocked Users</button>
      </div>

      {/* Search Input */}
      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Active or Blocked Users */}
      <div style={{ marginTop: 20, overflowY:'scroll' , width:'1000px'}}>
        {tab === 0 && (
          <div>
            
            <table  style={{ width: "100%", textAlign: "left", color:'black', overflowY:'scroll' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} style={{padding:'10px'}}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => handleBlockUser(user.id)}>
                       Tap Block User
                      </button>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 1 && (
          <div>
            
            <table  style={{ width: "100%", textAlign: "left", color:'black' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.status}</td>
                    <td>
                      <button onClick={() => handleUnblockUser(user.id)}>
                        Unblock User
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
   </UserContainer>
  );
};

export default UserManagement;