import { FunctionComponent } from "react";
import PropTypes from "prop-types";

const UserPage: FunctionComponent = () =>  {
    return(
        <>
            <div>User section!</div>
        </>
    );

}

UserPage.propTypes = {
    user: PropTypes.object,
}

export default UserPage;