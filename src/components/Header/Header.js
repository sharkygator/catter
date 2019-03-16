import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import SearchBar from './SearchBar';
import HeaderUserIcon from './HeaderUserIcon';
import AppContext from '../../context';
import Button from '../Button/Button';

const Header = ()=>{

    return(
        <AppContext.Consumer>
            {(context)=>(
                <header className={styles.wrapper}>
                    <HeaderNavigation />
                    
                    <div className={styles.elementWrapper}>
                    <SearchBar />
                    <HeaderUserIcon 
                        iconUrl={context.user.image}
                    />
                    <Button>
                        Tweet
                    </Button>
                    </div>
                </header>
            )}
        </AppContext.Consumer>
    )
}
export default Header;