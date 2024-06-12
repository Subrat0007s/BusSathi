import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../Style/landingpage.module.css';

const LandingPage = () => {
    const [dimmed, setDimmed] = useState(false);

    const handleClick = () => {
        setDimmed(true);
    };

    return (
        <div className={style.landingpages}>
            <Link to="/adminlogin" onClick={handleClick}>
                <h2 className={dimmed ? style.dimmed : ''}>Admin</h2>
            </Link>
            <Link to="/userlogin" onClick={handleClick}>
                <h2 className={dimmed ? style.dimmed : ''}>User</h2>
            </Link>
        </div>
    );
};

export default LandingPage;
