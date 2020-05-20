
import React,{ useState } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import classes from './Layout.module.css';
import { connect } from 'react-redux';

const Layout = props => {
    // state = {
    //     showSideDrawer:false
    // }
    const [sideDrawerIsVisible, setSidedrawerIsVisible] = useState(false);
const sideDrawerClosedHandler = () => {
    // this.setState({showSideDrawer:false});
    setSidedrawerIsVisible(false);
}

const sideDrawerToggleHandler = () => {
    // this.setState((prevState) => {
    //     return {showSideDrawer: !prevState.showSideDrawer}
    // });
    setSidedrawerIsVisible(!sideDrawerIsVisible);
}

        return(
            <Aux>
            <Toolbar
            isAuth={props.isAuthenticated} 
            drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
            isAuth={props.isAuthenticated} 
            open={sideDrawerIsVisible} 
            closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
            </Aux>
        )
    }


const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);