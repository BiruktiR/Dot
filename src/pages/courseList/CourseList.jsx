import React from 'react'
import Demo from './Demo';
const CourseList = () => {
  return (
    <div> 
      <Demo />
    </div>
  )
}

export default CourseList

// import "./courseList.css";
// import MaterialTable from '@material-table/core'
// import { useState } from "react";
// import { userRows } from "../../dummyData";


// export default function UserList() {
//   const [data, setData] = useState(userRows)
//   const columns = [
//     { title: "ID", field: "id", width: 90, editable: false },
//     {
//       title: "Course Title", field: "Title",width: 300, validate: rowData => {
//         if (rowData.Title === undefined || rowData.Title === "") {
//           return "Required"
//         } else if (rowData.Title.length < 3) {
//           return "Title should contains atleast 3 chars"
//         }
//         return true
//       }
//     },
//     {
//       title: "Description", field: "Description",width: 350 , validate: rowData => {
//         if (rowData.Description === undefined || rowData.Description === "") {
//           return "Required"
//         } else if (rowData.Description.length > 50 ) {
//           return "Description should not contain more than 150 chars"
//         }
//         return true
//       }
//     },
//     {
//       title: "Total Enrolled", field: 'TotalEnrolled',width: 200, validate: rowData => {
//         if (rowData.TotalEnrolled === undefined || rowData.TotalEnrolled === "") {
//           return "Required"
//         } 
//         else
//         return true
//       }
//     },
    

//   ]


//   return (
//     <div className="App">
//       <h1 align="center">Welcome to Your Courses</h1>
//       <h1 align="center">Always Learn new things</h1>
      
//       <MaterialTable
//         title=""
//         data={data}
//         columns={columns}
//         editable={{
//           onRowAdd: (newRow) => new Promise((resolve, reject) => {
//             const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           }),
//           onRowDelete: selectedRow => new Promise((resolve, reject) => {
//             const index = selectedRow.tableData.id;
//             const updatedRows = [...data]
//             updatedRows.splice(index, 1)
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           }),
//           onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
//             const index = oldRow.tableData.id;
//             const updatedRows = [...data]
//             updatedRows[index] = updatedRow
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve()
//             }, 2000)
//           })

//         }}
//         options={{
//           actionsColumnIndex: -1, addRowPosition: "first"
//         }}
//       />
//     </div>
//   );
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// const AntTabs = styled(Tabs)({
//   borderBottom: '1px solid #e8e8e8',
//   '& .MuiTabs-indicator': {
//     backgroundColor: '#1890ff',
//   },
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
//   textTransform: 'none',
//   minWidth: 0,
//   [theme.breakpoints.up('sm')]: {
//     minWidth: 0,
//   },
//   fontWeight: theme.typography.fontWeightRegular,
//   marginRight: theme.spacing(1),
//   color: 'rgba(240,121,0,1)',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     color: '#FF6600',
//     opacity: 2,
//   },
//   '&.Mui-selected': {
//     color: '#FF6600',
//     fontWeight: theme.typography.fontWeightMedium,
//   },
//   '&.Mui-focusVisible': {
//     backgroundColor: '#FF6600',
//   },
// }));

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 20,
//     width: '50%',
//     backgroundColor: '#FF6600',
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'rgba(240,121,0,1)',
//     '&.Mui-selected': {
//       color: '#FF6600',
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(240,121,0,1)',
//     },
//   }),
// );

// export default function UserList() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
    
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ bgcolor: '#fff' }}>
//         <AntTabs value={value} onChange={handleChange} aria-label="ant example">
//           <AntTab label="Start-Up"  />
//           <AntTab label="Women Empowerment" />
//           <AntTab label="ReachUp" />
//         </AntTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//       <Box sx={{ bgcolor: '#000000' }}>
//         <StyledTabs
//           value={value}
//           onChange={handleChange}
//           aria-label="styled tabs example"
//         >
//           <StyledTab label="Start-up" />
//           <StyledTab label="Women Empowerment" />
//           <StyledTab label="ReachUp" />
//         </StyledTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//     </Box>
//   );
// }
