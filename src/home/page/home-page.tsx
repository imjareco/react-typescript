import { FunctionComponent } from "react";
import PropTypes from "prop-types";

const HomePage: FunctionComponent = () => {
    return (
        <>
            <div>Home section!</div>
        </>
    );
}

HomePage.propTypes = {
    user: PropTypes.object,
}

export default HomePage;