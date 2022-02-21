import React from 'react'
import "./Mobile.scss"

import logo from "../../../assets/logo.png"
import call from "../../../assets/Phone.png"



import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';

const Mobile = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="mobile__container">
                <div className="home">Home</div>
                <div className="home">About</div>
                <div className="home">Experties</div>
                <div className="home">Service</div>
                <div className="home">Timeline</div>
                <div className="home">Awards</div>
                <div className="home">Media</div>
                <div className="home">Contact</div>
                <div className="home"><CloseIcon className='icons' /></div>
            </div>
            <div className="mobile__bottom">
            <img src={call} alt="" className="call__logo" />
            <div className="right">
                <div className="upper">Available @</div>
                <div className="bottom">444.332.1167</div>
            </div>
        </div>

        </Box>
    );
    return (
        <>
            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="main">
                        <div className="mobile">
                            <div className="logo">
                                <img src={logo} alt="" className="mobile__logo" />
                            </div>
                            <div className="burger" onClick={toggleDrawer(anchor, true)}>
                                <MenuIcon className='iconss' />
                            </div>
                        </div>
                        </div>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Mobile