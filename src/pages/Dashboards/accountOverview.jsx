import styles from "./css/accountOverview.module.css";
import { connect } from 'react-redux';
import {ReactComponent as ActiveUsersIcon} from "../../assets/images/activeUsersIcon.svg";
import {ReactComponent as LendsqrUsersIcon} from "../../assets/images/lendsqrUsersIcon.svg";
import {ReactComponent as UsersWithLoansIcon} from "../../assets/images/usersWithLoansIcon.svg";
import {ReactComponent as UsersWithSavingsIcon} from "../../assets/images/usersWithSavingsIcon.svg";
import { useNavigate } from 'react-router-dom';


const AccountOverview = props => {
  const navigate = useNavigate();
    const goToUsersPage=()=>{
      // props.history.push("/admin/users")
      navigate("/user")
    }
    return (  
        <> 
            <div className={styles.parent} style={{marginTop:'-2em'}}>
                <div className={styles.quick}>Users</div>            
                    <div className={styles.quickboxParent} onClick={goToUsersPage} >
                      <div className={styles.quickbox}>
                        <LendsqrUsersIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>USERS</div>
                        <div className={styles.quickNumber}>2,453</div>
                      </div>

                      <div className={styles.quickbox}>
                        <ActiveUsersIcon className={styles.icon} />
                        <div className={styles.quickDesc}>ACTIVE USERS</div>   
                        <div className={styles.quickNumber}>2,453</div>
                      </div>

                      <div className={styles.quickbox} >
                        <UsersWithLoansIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>USERS WITH LOANS</div>   
                        <div className={styles.quickNumber}>12,453</div>
                      </div>

                      <div className={styles.quickbox}>
                        <UsersWithSavingsIcon className={styles.icon}/>
                        <div className={styles.quickDesc}>USERS WITH SAVINGS</div>   
                        <div className={styles.quickNumber}>102,453</div>
                      </div>

                    </div>                             
            </div>
        </>
     );
}

const mapStateToProps=state=>({
})
export default connect(mapStateToProps) (AccountOverview);
