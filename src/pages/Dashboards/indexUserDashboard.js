//Import Components
import { withSidebarLayout } from "../../components/HOC/hoc";
import UserOverview from "./userOverview";

const User=()=> {
   
        return (
            <>
                <div>
                  <UserOverview/>
                </div>
            </>
        );
    }


export default withSidebarLayout(User);
