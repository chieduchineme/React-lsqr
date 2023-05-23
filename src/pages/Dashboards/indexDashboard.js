import {withSidebarLayout} from "../../components/HOC/hoc";
import AccountOverview from "./accountOverview";
import TransactionHistoryTable from "./transactionHistoryTable";

const Dashboard=()=> {
   
        return (
            <>
                <div>
                  <AccountOverview/>
                  <TransactionHistoryTable/>
                </div>
            </>
        );
    }


export default withSidebarLayout(Dashboard);
