import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <div className="tabs-title">
            <Link to='/home'> To dos</Link>
            <Link to='/statistic'> Statistic</Link>
        </div>);
};

export default Header;