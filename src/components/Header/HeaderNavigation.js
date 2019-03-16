import React from 'react';
import styles from './HeaderNavigation.module.scss';
import {NavLink} from 'react-router-dom';
import AppContext from '../../context';

const HaderNavigation = () =>{
    return(
        <AppContext.Consumer>
            {(context)=>(
                <nav>
                    <ul className={styles.wrapper}>
                        <li className={styles.navItem}>                            
                            <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to={context.pathname}>USER</NavLink>
                        </li>
                        <li className={styles.navItem}>                    
                            <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to='/home'>HOME</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink exact className={styles.navItemLink} activeClassName={styles.navItemLinkActive} to='/'>MAIN</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </AppContext.Consumer>
    )
}

export default HaderNavigation;