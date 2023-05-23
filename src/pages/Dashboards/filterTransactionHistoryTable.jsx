import React, { useState}  from "react";
import styles from "./css/transactionHistory.module.css";
import TransactionHistoryTable from "./transactionHistoryTable";

const FilterTransactionHistoryTable = () => {
    const [formValue, setFormValue] = useState({user: '', email: '', activeStatus:'', date:'', phoneNumber:'', organization:''});

  // reset input values
    const reset = () => {setFormValue({user: '', email: '', activeStatus:'', date:'', phoneNumber:'', organization:''}) };

    return ( 
        <>
        <TransactionHistoryTable/>
        <div>
            <div className={styles.formparent}>
                <label style={{marginLeft:'1.94vw', fontWeight:'700', marginBottom:'-0.04vw'}} for="organization">Organization</label>                                               
                <div className={styles.input}>
                        <select onChange={e => setFormValue(e.target.value)}  value={formValue.organization} className={styles.placeholder} id="organization" placeholder='Select'>
                            <option value="">Select</option>
                        </select>
                </div>
                <div style={{marginLeft:'1.94vw', fontWeight:'700', marginBottom:'-0.04vw'}} for="username">Username</div>
                <div className={styles.input}>
                    <input onChange={e => setFormValue(e.target.value)}  value={formValue.user} id="username" className={styles.placeholder} placeholder='User'/>
                </div>
                <label style={{marginLeft:'2.14vw', fontWeight:'700', marginBottom:'-0.04vw'}} for="email">Email</label>
                <div className={styles.input}>
                    <input type='email' onChange={e => setFormValue(e.target.value)} id="email" value={formValue.email} className={styles.placeholder} placeholder='Email'/>
                </div>
                <div style={{marginLeft:'1.94vw', fontWeight:'700', marginBottom:'-0.04vw'}} for="date">Date</div>
                <div className={styles.input}>
                    <input type='date' onChange={e => setFormValue(e.target.value)}  value={formValue.date} id="date" className={styles.placeholder} placeholder='Date'/>
                </div>
                <div style={{marginLeft:'1.94vw', fontWeight:'700', marginBottom:'-0.04vw'}} for="phoneNumber">Phone Number</div>
                <div className={styles.input}>
                    <input type='number' onChange={e => setFormValue(e.target.value)} id="phoneNumber" value={formValue.phoneNumber} className={styles.placeholder} placeholder='Phone Number'/>
                </div>
                <div style={{marginLeft:'1.94vw',fontWeight:'700', marginBottom:'-0.04vw'}} for="actistatus">Status</div>
                <div className={styles.input}>
                    <select onChange={e => setFormValue(e.target.value)}  id="actistatus" value={formValue.activeStatus} className={styles.placeholder} placeholder='Status'>
                        <option value="">Select</option> 
                    </select>
                </div>
                <button className={styles.resetButton} onClick={reset}>Reset</button>
                <button className={styles.filterButton}>Filter</button>
            </div>
        </div>
        </>
     );
}
 
export default FilterTransactionHistoryTable;