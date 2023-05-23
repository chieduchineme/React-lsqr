import React, {useState} from "react";
import styles from "./css/weekly.module.css";
import {ReactComponent as UserAvatarIcon} from "../../assets/images/userAvatarIcon.svg";
import {ReactComponent as ColoredStarIcon} from "../../assets/images/coloredStarIcon.svg";
import {ReactComponent as UncoloredStarIcon} from "../../assets/images/uncoloredStarIcon.svg";
import {ReactComponent as BackButtonIcon} from "../../assets/images/backButtonIcon.svg";

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserOverview = (props) => {

  const [valued, setValued] = useState(0);
  const handleChange = (event, newValue) => {
    setValued(newValue)
  };

    return ( 
        <>
          <div style={{display:'flex', marginTop: '3em'}}>
            <Link  to="/dashboard"  className={styles.graphicon}><BackButtonIcon /></Link>
            <span className={styles.iconText}>Back to Users</span>
          </div>
          <div className={styles.weekDropDownRow}>
            <div className={styles.quick}>User Details</div>
            <div className={styles.dropdown} >
              <button className={styles.topButtonRed}>
                BLACKLIST USER
              </button>  
              <button className={styles.topButtonGreen} style={{marginLeft:'2vw', marginRight:'2vw'}}>
                ACTIVATE USER
              </button>  
            </div>
          </div>
            <div className={styles.parent}>
              <div className={styles.secondDropDownRow}>
              <div ><UserAvatarIcon /></div>
              <div style={{marginLeft:'2vh',marginRight:'2vh'}}>
                <div className={styles.week} style={{fontSize:'2vw', fontFamily:'sans-serif', marginTop:'2vw'}}>Grace Effiom</div>
                <div className={styles.nameCode}>LSQFf587g90</div>
              </div>
              <div className={styles.segmentTwo}>
                <div  className={styles.segmentTwoRow}>
                  <div>
                        <div className={styles.week} style={{fontSize:'1vw', fontFamily:'sans-serif', marginTop:'2vw', color:'rgb(112, 103, 103)'}}>User's Tier</div>
                        <div style={{display:'flex'}}>
                          <div><ColoredStarIcon /></div>            
                          <div><UncoloredStarIcon /></div>  
                          <div><UncoloredStarIcon /></div> 
                        </div>
                  </div>
                </div>
              </div>
              <div className={styles.segmentTwo}>
                <div  className={styles.segmentTwoRow}>
                  <div>
                        <div className={styles.week} style={{fontSize:'2vw', fontFamily:'sans-serif', marginTop:'2vw'}}>₦200,000.00</div>
                        <div className={styles.nameCode}>9912345678/Providus Bank</div>
                  </div>
                </div>
              </div>
            </div>
              <div>               
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs textColor="secondary" indicatorColor="secondary"  value={valued} onChange= {handleChange}  >
                      <Tab label="General Details" {...a11yProps(0)} sx={{fontWeight:'600'}}/>                        
                      <Tab label="Documents" {...a11yProps(1)}  sx={{fontWeight:'600'}} />
                      <Tab label="Bank Details" {...a11yProps(2)} sx={{fontWeight:'600'}}  />
                      <Tab label="Loans" {...a11yProps(3)} sx={{fontWeight:'600'}} />
                      <Tab label="Savings" {...a11yProps(4)} sx={{fontWeight:'600'}} />
                      <Tab label="App and System" {...a11yProps(5)} sx={{fontWeight:'600'}} />
                    </Tabs>
                  </Box>
                  <TabPanel value={valued} index={0} >
                    <div >
                      <div  style={{fontSize:'1.5em', fontFamily:'sans-serif',marginRight:'2vh', color:'rgba(33, 63, 125, 1)' }}>Personal Information</div>
                      <Box sx={{ flexGrow: 1 }}>
                      <Grid container >
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>FULL NAME</span>
                                <span className={styles.breadcrumbd}>Grace Effiom</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>PHONE NUMBER</span>
                                <span className={styles.breadcrumbd}>07060780922</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>EMAIL ADDRESS</span>
                                <span className={styles.breadcrumbd}>grace@gmail.com</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>BVN</span>
                                <span className={styles.breadcrumbd}>07060780922</span>
                              </div>
                            </div>
                            <div className={styles.column}>
                                <span className={styles.breadcrumbs}>GENDER</span>
                                <span className={styles.breadcrumbd}>Female</span>
                            </div>
                        </div>
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>MARITAL STATUS</span>
                                <span className={styles.breadcrumbd}>Single</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>CHILDREN</span>
                                <span className={styles.breadcrumbd}>None</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>TYPE OF RESIDENCE</span>
                                <span className={styles.breadcrumbd}>Parent's Apartment</span>
                              </div>
                            </div>
                        </div>
                        </Grid>
                        </Box>
                        <hr style={{marginTop:"5vw",marginBottom:"1.9vw" }}/>

                        <div  style={{fontSize:'1.5em', fontFamily:'sans-serif',marginRight:'2vh', color:'rgba(33, 63, 125, 1)' }}>Education and Employment</div>
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container >
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>LEVEL OF EDUCATION</span>
                                <span className={styles.breadcrumbd}>B.Sc</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>EMPLOYMENT STATUS</span>
                                <span className={styles.breadcrumbd}>Employed</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>SECTOR OF EMPLOYMENT</span>
                                <span className={styles.breadcrumbd}>Fintech</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>DURATION OF EMPLOYMENT</span>
                                <span className={styles.breadcrumbd}>2 years</span>
                              </div>
                            </div>
                        </div>
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>OFFICE EMAIL</span>
                                <span className={styles.breadcrumbd}>grand@lendsqr.com</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>MONTHLY INCOME</span>
                                <span className={styles.breadcrumbd}>₦200,000.00-₦400,000.00</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>LOAN REPAYMENT</span>
                                <span className={styles.breadcrumbd}>40,000</span>
                              </div>
                            </div>
                        </div>
                        </Grid>
                        </Box>
                        <hr style={{marginTop:"5vw",marginBottom:"1.9vw" }}/>
            
                        <div  style={{fontSize:'1.5em', fontFamily:'sans-serif', marginTop:'2vw',marginRight:'2vh', color:'rgba(33, 63, 125, 1)' }}>Socials</div>
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container >
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                                <div className={styles.column}>
                                <span className={styles.breadcrumbs}>TWITTER</span>
                                <span className={styles.breadcrumbd}>@grace_effiom</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>FACEBOOK</span>
                                <span className={styles.breadcrumbd}>Grace Effiom</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>INSTAGRAM</span>
                                <span className={styles.breadcrumbd}>@grace_effiom</span>
                              </div>
                            </div>
                        </div>
                        </Grid>
                        </Box>
                        <hr style={{marginTop:"5vw",marginBottom:"1.9vw" }}/>

                        <div  style={{fontSize:'1.5em', fontFamily:'sans-serif',marginRight:'2vh', color:'rgba(33, 63, 125, 1)' }}>Guarantor</div>
                        <Box sx={{ flexGrow: 1 }}>
                        <Grid container >    
                        <div style={{display:'flex'}} className={styles.weekDropDownRow}>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>FULL NAME</span>
                                <span className={styles.breadcrumbd}>Debby Ogana</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>PHONE NUMBER</span>
                                <span className={styles.breadcrumbd}>07060780922</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>EMAIL ADDRESS</span>
                                <span className={styles.breadcrumbd}>debby@gmail.com</span>
                              </div>
                            </div>
                            <div>
                              <div className={styles.column}>
                                <span className={styles.breadcrumbs}>RELATIONSHIP</span>
                                <span className={styles.breadcrumbd}>Sister</span>
                              </div>
                            </div>
                        </div>
                      </Grid>
                      </Box>
                    </div>
                  </TabPanel>
                  <TabPanel value={valued} index={1}>
                    Documents
                  </TabPanel>
                  <TabPanel value={valued} index={2}>
                      Bank Details
                  </TabPanel>
                  <TabPanel value={valued} index={3}>
                      Loans
                  </TabPanel>
                  <TabPanel value={valued} index={4}>
                      Savings
                  </TabPanel>
                  <TabPanel value={valued} index={5}>
                      App and System
                  </TabPanel>
                {/* </Box> */}
              </div>
            </div>
          
        </>
     );
}
 
export default UserOverview;