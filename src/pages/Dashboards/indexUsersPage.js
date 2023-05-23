//Import Components
import AccountOverview from "./accountOverview";
import FilterTransactionHistoryTable from "./filterTransactionHistoryTable";

const UsersPage=()=> {
   
        return (
            <>
                <div>
                  <AccountOverview/>
                  <FilterTransactionHistoryTable/>
                </div>
            </>
        );
    }


export default UsersPage;
