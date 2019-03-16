import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import SearchBar from './SearchBar';
import Button from '../Button/Button';
import ProfileImage from '../ProfileComponents/ProfileImage';

const Header = ()=>{

    return(
                <header className={styles.wrapper}>
                    <HeaderNavigation />
                    
                    <div className={styles.elementWrapper}>
                    <SearchBar />
                    <ProfileImage 
                        type='small' 
                    />
                    <Button>
                        Tweet
                    </Button>
                    </div>
                </header>
    )
}
export default Header;