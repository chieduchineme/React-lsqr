import React, { useState } from 'react';
import styles  from './css/login.module.css'
// Redux
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// actions
import { loginAction} from '../../redux/actions/loginAction';
import {ReactComponent as LendsqrIcon} from "../../assets/images/lendsqrIcon.svg";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react"; 
import { withLayout } from '../../components/HOC/hoc';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0D2565;
  margin-bottom:10pxf
`;
const Login=props=> {
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState('');
   const color = "#0D2565";
   const navigate = useNavigate();

const handleSubmit=(e)=>{
        e.preventDefault()
        const body={
           "channel": 2,
           'username':username,
           'password':password,
           'mobileVersion': 4.5,
           'webClient':'',
           'machineId':'',
           'loginLocation':'',
           'ipAddress':'',
       }
       console.log('body',body)
       props.loginAction(body)
       navigate("/dashboard")
   }
        return (
            <>
                    <div className={styles.parent}>
                        <div>
                            <div className={styles.flexbox}>
                                <LendsqrIcon />
                            </div>
                            <div className={styles.backgroundImage}/>
                        </div>
                            <div className={styles.formparent}>                       
                                <div className={styles.welcome}>Welcome!</div>
                                <div className={styles.submessage}>Enter details to login.</div> 
                                <div  className={styles.error}>{props.error}</div>
                                <form>
                                    <div className={styles.input}>
                                        <input onChange={e => setUsername(e.target.value)}  value={username} className={styles.placeholder} placeholder='Email'/>
                                    </div>
                                    <div className={styles.input}>
                                        <input type='password' onChange={e => setPassword(e.target.value)}  value={password} className={styles.placeholder} placeholder='Password' autoComplete="on" />
                                    </div>
                                    <div className={styles.forgotpassword}>FORGOT PASSWORD?</div>
                                </form>
                                {props.loading &&
                                <div>
                                    <BounceLoader color={color} loading={props.loading} css={override} size={20} /> 
                                </div>
                                }
                                <button disabled={username==='' || password===''} className={styles.button} onClick={handleSubmit}>{props.loading ? '...loading' : 'LOG IN'}</button>
                            </div>
                    </div>
            </>
        );
    }

const mapStatetoProps = state => ({
    loading: state.loginResponse.loading,
    error: state.loginResponse.error,
})
connect(mapStatetoProps,{loginAction}) (Login);
export default withLayout(Login);