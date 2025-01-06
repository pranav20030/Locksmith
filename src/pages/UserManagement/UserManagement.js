import React, { useState } from "react";
import { Box,  IconButton, Card, CardContent, Grid, Avatar } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";

import { TbEyeCheck } from "react-icons/tb";
import { PiUsersFill } from "react-icons/pi";
import { FaRegSquareFull } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import { initialBlockedUsers, initialActiveUsers } from "./UserElement";

import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
const UserManagement = () => {
  const [showCards, setShowCards] = useState(true);

  const toggleCardsVisibility = () => {
    setShowCards(!showCards);
  };
const UserContainer = styled.div`
  
 
  margin-left: 300px;
 
  padding: 0rem 2rem;

   @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
const [tab, setTab] = useState(0);
const [searchQuery, setSearchQuery] = useState("");

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
  
};

const [activeUsers, setActiveUsers] = useState(initialActiveUsers);
const [blockedUsers, setBlockedUsers] = useState(initialBlockedUsers);


const handleTabChange = (newValue) => {
  setTab(newValue);
  setSearchQuery("");
};


const handleBlockUser = (userId) => {
  const userToBlock = activeUsers.find((user) => user.id === userId);
  if (userToBlock) {
    setActiveUsers(activeUsers.filter((user) => user.id !== userId));
    setBlockedUsers([...blockedUsers, { ...userToBlock, status: "tap to unblock" }]);
  }
};


const handleUnblockUser = (userId) => {
  const userToUnblock = blockedUsers.find((user) => user.id === userId);
  if (userToUnblock) {
    setBlockedUsers(blockedUsers.filter((user) => user.id !== userId));
    setActiveUsers([...activeUsers, { ...userToUnblock, status: "tap to block" }]);
  }
};


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
        <h6 style={{color:'#26344E', fontSize:'1.25rem', padding:"10px 0px",marginTop:'4px' }}>User Management</h6>
        <IconButton onClick={toggleCardsVisibility} aria-label="Toggle visibility">
          {showCards ? <Visibility style={{color:'#26344E'}}/> : <VisibilityOff style={{color:'#26344E'}} />}
        </IconButton>
      </Box>

   
      {showCards && (
        <Grid container spacing={2}>
         
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

        
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
              <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
                  <div>
                    <h5 style={{color:'#26344E', fontSize:'1.25rem', fontWeight:'500'}}>Registered Users</h5>
                    <p style={{color:'white', fontSize:'1.1rem'}}> <i>(in a week )</i> </p>
                    <h3 style={{color:'#1F263E', fontSize:'1.5rem', fontWeight:'700'}}>2600</h3>
                  </div>
                  <Avatar style={{background:'#26344E'}}><PiUsersFill style={{fontSize:'1.8rem'}} /></Avatar>
                </div>
              </CardContent>
            </Card>
          </Grid>

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
    <div style={{padding:'25px 10px'}} >
     
     <div style={{display:'flex', gap:'40px'}}>
     <div>
        <button onClick={() => handleTabChange(0)} style={{ marginRight: 10, backgroundColor: tab === 0 ? "#26344E" : "white", color: tab === 0 ? "white" : "black", border: tab === 0 ? "none": "1px solid #26344E26", padding:'6px 10px', fontWeight: tab === 0 ? "700": "400", }}>
          Active Users <span style={{display: tab === 0 ? "": "none"}}>({activeUsers.length})</span> 
        </button>
        <button onClick={() => handleTabChange(1)} style={{ marginRight: 10, backgroundColor: tab === 1 ? "#26344E" : "white", color: tab === 1 ? "white" : "black", border: tab === 1 ? "none": "1px solid #26344E26", padding:'6px 10px', fontWeight: tab === 1 ? "700": "400", }}>
          Blocked Users <span style={{display: tab === 1 ? "": "none"}}>({blockedUsers.length})</span> 
          </button>
      </div>

      
      <div style={{ }}>
      
        
          <TextField
        placeholder="Serach by name, email etc"
        style={{maxwidth:'300px'}}
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        />
      </div>
      </div>

     
      <div style={{ marginTop: 20, overflowY:'scroll' }}>
        {tab === 0 && (
          <div>
            
            <table  style={{ width: "100%", textAlign: "center", color:'black', overflowY:'scroll',  }}>
              <thead style={{background:'#D5DFF0', padding:'10px', color:'#26344E', fontSize:'1rem'}}>
                <tr style={{overflow:'scroll', }}>
                  <th style={{padding:'10px'}}><FaRegSquareFull /></th>
                  <th>S.no</th>
                  
                  <th> Joining Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Phone</th>
                  <th>Device Id</th>
                </tr>
              </thead>
              <tbody style={{fontSize:'14px', fontWeight:'400', color:'#484848'}}>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} style={{padding:'10px'}}>
                    <td style={{padding:"15px"}}> <FaRegSquareFull /> </td>
                    <td key={index}>{index + 1}</td>
                    
                    <td>{user.date}</td>
                    <td><NavLink style={{color:"#375DFB"}}>{user.name} </NavLink></td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => handleBlockUser(user.id)} style={{background:'#F56C8980', border:'none', padding:'5px'}} >
                       <i>tap to block </i>
                      </button>
                    </td>
                    <td>{user.phone}</td>
                    
                    
                    
                    <td>{user.deviceId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 1 && (
          <div>
            
            <table  style={{ width: "100%", textAlign: "left", color:'black' }}>
            <thead style={{background:'#D5DFF0', padding:'10px', color:'#26344E', fontSize:'1rem'}}>
                <tr style={{overflow:'scroll', }}>
                  <th style={{padding:'10px'}}><FaRegSquareFull /></th>
                  <th>S.no</th>
                  
                  <th> Joining Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Phone</th>
                  <th>Device Id</th>
                </tr>
              </thead>
              <tbody style={{fontSize:'14px', fontWeight:'400', color:'#484848'}}>
                {filteredUsers.map((user, index) => (
                   <tr key={user.id} style={{padding:'10px'}}>
                   <td style={{padding:"15px"}}> <FaRegSquareFull /> </td>
                   <td key={index}>{index + 1}</td>
                   
                   <td>{user.date}</td>
                   <td><NavLink style={{color:"#375DFB"}}>{user.name} </NavLink></td>
                   <td>{user.email}</td>
                   <td>
                     <button onClick={() => handleUnblockUser(user.id)} style={{background:'#11992669', border:'none', padding:'5px'}}>
                     <i> tap to unblock</i>
                     </button>
                   </td>
                   <td>{user.phone}</td>
                   
                   
                   
                   <td>{user.deviceId}</td>
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