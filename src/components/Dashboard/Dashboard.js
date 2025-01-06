import React, {useState} from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { PiClockAfternoonFill, PiFlagBannerFill } from "react-icons/pi";
import { PiFlagBannerFoldFill } from "react-icons/pi";

import { CardDetail, DashboardContainer, DashboardHeading, DashHeading, DashText } from "./DashboardElement";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';
import { PiLockKeyFill, PiUserFill } from "react-icons/pi";
import './Dashboard.css'
import { NavLink } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";




 

export default function Dashboard() {
  const metrics = [
    { title: "Registered Users", value: "12,000", icon: <Avatar style={{background:"#0C34B4"}}><PiUserFill  /></Avatar> },
    { title: "Registered Locksmith", value: "17,523", icon: <Avatar style={{background:'#375DFB'}}><PiLockKeyFill /></Avatar> },
    { title: "Completed Bookings", value: "24,087", icon: <Avatar style={{background:'#4E77FF'}}><PiFlagBannerFill /></Avatar> },
    { title: "Ongoing Bookings", value: "5,989", icon: <Avatar style={{background:"#0959ED"}}><PiClockAfternoonFill /></Avatar> },
  ];

  const requests = [
    {
      name: "J G William", email: "jgwilliam@example.com",phone: "+1 (512) 73847289",photo: "https://s3-alpha-sig.figma.com/img/fc6d/2f3d/7110ae0f170729e88995c1639379894c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dvNeD4aWD1wZSV3LKZWtBIozZRttgGG2DqUtzVMGYmVAMyVg-LOdN~3PktCSCsaoN9FugM~pDP9yDmT4LwEE0jLDerYjN6kv-rTy8AftC~-iak98arfaVSx-5SxcZrWdy~ICeWlShspoq0KfbMNZwAXkumqOPl9WPxhqMCGte0lxwrJ8u1YlcwOUnarcgS5Jsf3O2qW1X85oIpItVJxZIJ4KgDLdkfo4JJtbRCKAPh6unrtDWTSopzXbni6DMFiJWIkVlTVxOMg7eOBmfAJ6IlccGRdSVd~KGcggbyE067WXzzmxA97YENnWekUw6vERsGs3Z3vaocQ3SWvlTaSa7A__", 
    },
    {
      name: "Henry Butcher",email: "henry_cher@example.com",phone: "+1 (512) 73847289",photo: "https://s3-alpha-sig.figma.com/img/2524/a54a/1549a7ec92c66b18ed135b8d36d8c4b7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e7v97rg-pa3v2Z9xcO5aLfUngH2PJtWtqdTdmvtEbiMzhGRi7f3wTvSKy5mBPc4TItDroG2r3JLvp6JvJKicZrvNlI9AJj9DDTehKllSDwGQrZ9HOCnHnj7eY6HSWARXRUYZGt~Lzyf5-xePwjnGFQSMOHWlWo32kEzkXY3aGgmMYvM~wCtaUTE6~ir3pss3opZdqjgV5qwoHkf8m23BdjUfjlQXuN9kh353jwKzwltZcRXP440U~xaFcf9h9I1ABlPOQcioSsob1Fmj60tMBpoyFEIgcIGwJ3E8Yr2Zy2K~gLK2OiJX6ydfneF3Ril3Tcra2cfDhDCh9fDQ18Mz~A__", 
    },
    {
      name: "John Smith", email: "johnsmith@exple.com", phone: "+1 (512) 73847289", photo: "https://s3-alpha-sig.figma.com/img/22c5/5c29/062f8b038339bea4a15b45b65c2e5357?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkbxGm0r6EhtWauA7q-pbnlW9~-iiLvSerI-A6UammRC9Og0LNDTT5apMOcBiPTbM2-TMsoA14aMECpHWbITfZbpjyJLsd~u9oEiBf-banTM7DIwTh1QLfnb6u-GQ2zrTPYiCRAloiywtytl0ft4Fv~YaLZZSuaHpsQoDHnmEOc8By9vgHMKOnhj~lvzipDHYkoP36nTahnrEDa-xp43aBCYHsddbyrnP-i9Fnwk5CaEiCYTIOxmGx65LsrSAuuUQqEMM~1rY9ALTon2rIEulrQ9oIZnDKgAfqFLkzX0XVRcd7ouTbLYdnK610fGKI7WSp0I1YrWxeuG6U-kCjk8gw__", // Replace with actual photo URL
    },
    {
      name: "Travis William",email: "traviswilliam@ex.com",phone: "+1 (512) 73847289",photo: "https://s3-alpha-sig.figma.com/img/3662/e399/b8712cd3f85b9427a7e6d17ee57ca6cb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZrs5Zn~8pqmjSyR6F4UWhLXNBvODd7Rg9beREEoGmnojZGl~vXswW8Xu~Ra-hT317RBjtMAQZ4mmCE-qqS8DoPOOw01AAG~CfhP3GVvRFJ245p1zlns7JJv0vwVS-bAwo7IwBfsCGLCBz35CW7DeM25eUim8x4gu5sMRyQRa~qCbzPyko7AyIAcBLENMS9GkfgTsmFh94wXuES8roINaoPNfCWigsiYIuawbpo~Ij2G8ymqNJPyCx~bSIqe4BQ-wtwj29Xiz5Xxmv6sU5WyBIy5Vh7bm2GmQyDIDzZsRO-fYSD4C0VcBJ1zLQiZqi0XzUagVTqff7F5~bnfoRSMGg__", 
    },
    {
      name: "Travis William", email: "traviswilliam@ex.com", phone: "+1 (512) 73847289", photo: "https://s3-alpha-sig.figma.com/img/3662/e399/b8712cd3f85b9427a7e6d17ee57ca6cb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZrs5Zn~8pqmjSyR6F4UWhLXNBvODd7Rg9beREEoGmnojZGl~vXswW8Xu~Ra-hT317RBjtMAQZ4mmCE-qqS8DoPOOw01AAG~CfhP3GVvRFJ245p1zlns7JJv0vwVS-bAwo7IwBfsCGLCBz35CW7DeM25eUim8x4gu5sMRyQRa~qCbzPyko7AyIAcBLENMS9GkfgTsmFh94wXuES8roINaoPNfCWigsiYIuawbpo~Ij2G8ymqNJPyCx~bSIqe4BQ-wtwj29Xiz5Xxmv6sU5WyBIy5Vh7bm2GmQyDIDzZsRO-fYSD4C0VcBJ1zLQiZqi0XzUagVTqff7F5~bnfoRSMGg__", 
    },
  ];


  const servicesData = [
    { id: 1, name: 'James Davis', type: 'Automotive', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/5185/5aa5/919de2ceb7cc3f9db63f9b902dea21ad?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeGxUAkuLA19ptfeS2P1VOzzTrHfnGoJyYwqF4MsJKqURV54-npBrm0GBHWT6ptipbaizsNuesU8MtluCiFNL9WtOA5jUbD6aCvfGClO-0CySU0q6lq5ffev-i5RKIVdvvkD9G7W2Ra1FJEX0ZQEyeNjqJc3yOhLjz4Jkk6oVOqMm6~7zZf~BcG2I~0GZUYK6i4YFiikd~XjVxc54sz2sPpqTJ4BzGa8fn8fWYacanqcHKwiHJIfiQDuiYazYw-gwKTaG0TqVB0ohfOP1ljvbktzyS-NaAxW1pOlE68Zi4rW8y3ulwfObxBwtlsYa8acNPFcJXBcgDC--t98nXKKwQ__' },
    { id: 2, name: 'William Butcher', type: 'Automotive', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/4eb1/4b02/61802b25e543f0595b8c08e4b4902fcf?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDCRerezrdJSL6S2ESlqHKwZNVaYedQye7q9LE4vbzhWSX7da-Mdf9WRhdMBZXyOCFW88yMOZoQv3VGkQrvgvIv1ve-96sHD4Es1G0l0g3s0gPmhTJhIN-ZJah6dVJiXFaDrMaw~SiozuJA1bexN1T0DDU1N3ibAZmf4PpFAwKC2qMyaLklF9gkhvOdbCOnS2GLoTTtZpwcJMgmg4AO9xvOwISFHpVrcGWFyGwnOk1Vs9ei9EtDLT1jgnRjoXVfF91DwN9ThJOxmpWbZTfFrxJFpFuRSzMRcx0a0kEPBWqUZsMqLU59CvQeZcgwxkr1yyUKS3xnYMNxRNdZM93CQ4g__' },
    { id: 3, name: 'Jonas Bro', type: 'Commercial', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/4db2/c58e/e144939af54a2e2c4062c663362d6e55?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CAX7ludisGHNYGwp~fdB-XCWRCPRQMqP3Dmp-9nFW9FPp1e24UxAfwMEz7zh6qzn-A5XUcSSQX4tdWlujdnWdBhLM4kZDWksoZIJPr6Pk8cHddqvdkm86HmOHcJkpnvXY6u-Pz1qywhK-~zpW-smBZyMz6TJ9TN58Ibeo2rjgxETSjx5~xao79cToksh6TMAp0hV~5T0ykE1LNkBegFbRDv6Ty5LN6288vQDAHHxxjJszem~axiFFr4hF-cBu6I5FmzOKfpk6-KpkDsFUrE-JnYdAy21N6ST-16dISC0buJv9OvYGdeQZ7b70HOqLj06es0QKP263rNE1orUznggoA__' },
    { id: 4, name: 'David Perry', type: 'Residential', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/83ab/462a/89a08fdba266b544d03bce6d41e497cd?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=moYBZCNcyFv6DZdxhHo4T4gpK6tq4pTcJizi0IzmBw9e0yzAsEQ2oLOLLmG0ixgbOB2m5PSA9oBLTy1ZL5hP5CzPy9lInmvxly3-Jy8sQj1QCrykM68w8kDrUP4AyD33z9Ndc08odom-gl34lEv3RqsySxalrZzmECG~lKdHqczNYPwG-qUJoTSAkjS6iptalMM7XPpw9OsmXT8ie0-vQP~2mtkOI2W1IkkuscW5t1potwDXkVDS3aLpvAX2WeGUYK33GQIzkGvuhbiLE42DNKGQZy3rcY~D0LMN2n60E7NCx-fx5hLl3l-r8HznmnfRXWmeJFJLEKXzZ~Nk3pP6vw__' },
    { id: 5, name: 'Joan Swift', type: 'Residential', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/d5c5/5e01/c6c96a4ec39c33d32fc11058a6c5c4e7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gL0N1JHavj5xST-5RlApONUcdG6v5MedysqdJzPewKlM0kpr1Vj0PMLFY~9dweUztHFv9n8dGqnVbxBJVhuHz7QuUuhlJNtlNRG4hyfVq-he24k-fIssKHmB1zzCXKiaqPAsAoRQXqgfoaMcdsou8~REsRanhJHYGsq3X~fd5QusiHK3vmwTl8uXWKWJ52a9EyfNZKZYyPujDF-CKKAY~0FrYMurjESdWOaxo25rBA8kyx~pF2p5NXLK6UksHyC~VF8ZKbptLmH3r35wwSOpbjuNh4K61dVmOjCvhEJ7MxRDb0Ga4EOUkyaXai0p5alZqt1V9gFjjgyXuWaCPGaPkQ__' },
    { id: 6, name: 'Jack Griffin', type: 'Residential', task: 'Lockout & Replacement', price: '$123', image: 'https://s3-alpha-sig.figma.com/img/d5c5/5e01/c6c96a4ec39c33d32fc11058a6c5c4e7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gL0N1JHavj5xST-5RlApONUcdG6v5MedysqdJzPewKlM0kpr1Vj0PMLFY~9dweUztHFv9n8dGqnVbxBJVhuHz7QuUuhlJNtlNRG4hyfVq-he24k-fIssKHmB1zzCXKiaqPAsAoRQXqgfoaMcdsou8~REsRanhJHYGsq3X~fd5QusiHK3vmwTl8uXWKWJ52a9EyfNZKZYyPujDF-CKKAY~0FrYMurjESdWOaxo25rBA8kyx~pF2p5NXLK6UksHyC~VF8ZKbptLmH3r35wwSOpbjuNh4K61dVmOjCvhEJ7MxRDb0Ga4EOUkyaXai0p5alZqt1V9gFjjgyXuWaCPGaPkQ__' },
  ];

  const [time, setTime] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };
  const series = [
    {
      name: "Tasks",
      data: [300, 400, 456, 350, 310, 360, 400], // Sample data
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 150,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // Days of the week
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        format: "dddd", // Formats the day
      },
      y: {
        formatter: function (value) {
          return value + " tasks"; // Tooltip customization
        },
      },
    },
    colors: ["#50B8E4"], // Custom color
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.2,
      },
    },
  };
  const chartOptions = {
    plotOptions: {
      pie: {
        donut: {
          size: '45%'
        }
      }
    },
    chart: {
      type: "donut",
    },
    labels: ["Ongoing Services", "Completed Services", "Cancelled Services"],
    colors: ["#375DFB", "#50B8E4", "#26344E"], // Matching the colors in the chart
    legend: {
      position: "right",
    },
    dataLabels: {
      enabled: true,
      
    },
    tooltip: {
      enabled: true,
      y: {
        
        formatter: (val) =>`${val} Services`,
      },
    },
  };

  const chartSeries = [39, 120, 26];

  

  return (
    <DashboardContainer>
    
      <DashboardHeading>
        <DashText>
          <DashHeading>Dashboard</DashHeading>
          <p style={{color:"#212121A8", fontSize:'18px'}}>Hi Jasmine, Welcome back!</p>
        </DashText>
        <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel className="select">Timeframe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Timeframe"
          onChange={handleChange}
        >
          <MenuItem value={10}>Last 7 Days</MenuItem>
          <MenuItem value={20}>This Month</MenuItem>
          <MenuItem value={30}>This Year</MenuItem>
          <MenuItem value={30}>Custom</MenuItem>
        </Select>
      </FormControl>
    </Box>
        
      </DashboardHeading>
      

      {/* Metrics Section */}
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" flexDirection="column">
                  {metric.icon}
                  <h5 style={{fontWeight:'500', fontSize:'1.25rem',color:'#151D48', marginTop:'0.5rem', marginBottom:'0rem' }}>{metric.value}</h5>
                  <p style={{fontWeight:'400', color:' #212121', fontSize:'1rem', marginBottom:'0.5rem'}}>{metric.title}</p>
                   
                    
                  
                </Box>
                <NavLink>View Reports</NavLink>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Graphs and Pie Chart */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <CardDetail>
              <h2 style={{color:'#05004E', fontSize:'1.5rem'}}>Revenue</h2>
              <button style={{ color:'#26344E', marginBottom:'10px',border: '0.86px solid #26344E',padding:'0rem 1rem'  }}>View Revenue</button>
              </CardDetail>
           
            
      <ReactApexChart options={options} series={series} type="area" height={200} />
      

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
            <h3 style={{color:'#05004E', fontSize:'1.5rem'}}>Service Status</h3>
      <p style={{fontSize:'1rem', color:'#212121A8', marginTop:'-0.5rem'}}>Locksmith service status</p>
      <Chart options={chartOptions} series={chartSeries} type="donut" width="350" />

            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Lists */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
           <Card>
            <CardContent>
           <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}> 
            <h2 style={{fontSize:'1rem', padding:'10px 0px'}}>New Verification Requests</h2>
      <button
        style={{
         fontSize:'0.9rem',
          color: "#26344E",
          border: "0.86px solid #26344E",
          padding: "5px 15px",
          
          cursor: "pointer",
          float: "right",
        }}
      >
        View New Requests
      </button></div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <tbody>
          
          {requests.map((request, index) => (
            <tr key={index}>
              <td style={{ padding:'10px 0px', marginRight: "10px", borderBottom: "1px solid #ddd" }}>
                <img
                  src={request.photo}
                  alt={request.name}
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
              </td>
              <td style={{ padding: "10px",borderBottom: "1px solid #ddd", color:'#4C4C4C', fontSize:'0.8rem' }}>{request.name}</td>
              <td style={{ paddingRight: "10px", borderBottom: "1px solid #ddd",color:'#4C4C4C', fontSize:'0.75rem' }}><NavLink>{request.email}</NavLink></td>
              <td style={{ paddingRight: "10px", borderBottom: "1px solid #ddd", color:'#4C4C4C', fontSize:'0.75rem'}}>{request.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </CardContent>
          </Card> 
          

        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
            <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}> 
            <h2 style={{fontSize:'1rem', padding:'10px 0px'}}>Ongoing Services Data</h2>
      <button
        style={{
         fontSize:'0.9rem',
          color: "#26344E",
          border: "0.86px solid #26344E",
          padding: "5px 15px",
         
          cursor: "pointer",
          float: "right",
        }}
      >
       View Ongoing Services
      </button></div>
           

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
          {servicesData.map((service) => (
            <tr key={service.id}>
              <td style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img
                  src={service.image}
                  alt={`${service.name}`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    
                  }}
                />
                
              </td>
              <td style={{ padding: "6px", color:'#4C4C4C', fontSize:'0.8rem' }}>{service.name}</td>
              <td style={{paddingRight: "5px", color:'#4C4C4C', fontSize:'0.75rem' , alignContent:'center'  }}>
                <p style={{backgroundColor: service.type === 'Commercial' ? '#ABE6FF' : '#D3DCFF', marginTop:'1rem', padding:'0.3rem 0.3rem', borderRadius:'50px'}}>{service.type}</p>
              </td>
              <td style={{ paddingRight: "10px", color:'#4C4C4C', fontSize:'0.75rem' }}>{service.task}</td>
              <td style={{ paddingRight: "10px", color:'#119926', fontSize:'0.75rem' , textAlign: 'right', }}>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
