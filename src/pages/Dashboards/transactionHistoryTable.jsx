import React, { useState, useEffect }  from "react";
import styles from "./css/transactionHistory.module.css";
import {ReactComponent as TableHeaderIcon} from "../../assets/images/tableHeaderIcon.svg";
import {ReactComponent as ActivateUserIcon} from "../../assets/images/activateUserIcon.svg";
import {ReactComponent as  BlacklistUserIcon} from "../../assets/images/blacklistUserIcon.svg";
import {ReactComponent as ViewDetailsIcon} from "../../assets/images/viewDetailsIcon.svg";
import { Link } from "react-router-dom";
import axios from 'axios';


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';

const TransactionHistoryTable = (props) => {
const [usersDetails, setUsersDetails] = useState([]);
const [page, setPage] = useState(0);
const [baseNumber, setBaseNumber] = useState(0)
const [rowsPerPage, setRowsPerPage] = useState(10);
const options = [
    {"text": 'View Details', "icon": <ViewDetailsIcon/>},
    {"text": 'Blacklist User', "icon": <BlacklistUserIcon/> },
    {"text": 'Activate User', "icon": <ActivateUserIcon/>}
  ];
  
const ITEM_HEIGHT = 30;

const handleChangePage = (event, newPage) => {
  setBaseNumber(newPage);
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '21ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option.icon}
            <div style={{marginRight:'6px'}}></div>
            {option.text === "View Detail" ? <Link to="/dashboard">{option.text}</Link>:option.text}                       
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

useEffect(() => {
    const statusOptions = ["Inactive", "Active", "Pending", "Blacklisted"];
const statusArray = Array.from({ length: usersDetails.length }, () =>
  statusOptions[Math.floor(Math.random() * statusOptions.length)]
);
console.log(statusArray)
  axios
    .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    .then((response) => {
      const data = response.data;
      for (let i = 0; i < statusArray.length; i++) {
        data[i].Status = statusArray[i];
      }
      setUsersDetails(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}, [usersDetails.length]);

return ( 
    <>
        <div>
            <div className={styles.parent}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                        <TableRow>
                            <th className={styles.tablehead} scope="col">                        
                            <span className="ms-1" style={{paddingRight:'1vw'}}>ORGANIZATION</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>
                            <th className={styles.tablehead} scope="col">
                            <span className="ms-1" style={{paddingRight:'1vw'}}>USERNAME</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>
                            <th className={styles.tablehead} scope="col">
                            <span className="ms-1" style={{paddingRight:'1vw'}}>EMAIL</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>
                            <th className={styles.tablehead} scope="col">
                            <span className="ms-1" style={{paddingRight:'1vw'}} >PHONE NUMBER</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>
                            <th className={styles.tablehead} scope="col">
                            <span className="ms-1" style={{paddingRight:'1vw'}}>DATE JOINED</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>
                            <th className={styles.tableheaddesc} scope="col">
                            <span className="ms-1" style={{paddingRight:'1vw'}} >STATUS</span>
                            <TableHeaderIcon fill="inherit" height="17" width="17" className="icon" />
                            </th>                     
                            </TableRow>
                        </TableHead>                  
                        <TableBody>
                    {usersDetails
                    .slice(0 * rowsPerPage + (baseNumber * rowsPerPage), 1 * rowsPerPage + (baseNumber * rowsPerPage) )
                    .map((trans,index) =>
                    <tr key={index}>
                        <td className={styles.tabledata}>{trans.orgName}</td>
                        <td className={styles.tabledata}>{trans.userName}</td>
                        <td className={styles.tabledata}>{trans.email}</td>
                        <td className={styles.tabledata}>{trans.phoneNumber}</td>
                        <td className={styles.tabledata}>{trans.createdAt}</td>     
                        <td >
                           { trans.Status === "Pending" ? <Chip label={trans.Status} color="warning" />:
                           trans.Status === "Active" ? <Chip label={trans.Status} color="success" />:
                            trans.Status === "Inactive" ? <Chip label={trans.Status}/>:
                            trans.Status === "Blacklisted" ? <Chip label={trans.Status} color="primary" />: null
                        }
                        <LongMenu/>
                        </td>
                        
                    </tr>
                    )
                        }
                        </TableBody>

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={usersDetails.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
        </div>
    </>
  );
}
 
export default TransactionHistoryTable;
