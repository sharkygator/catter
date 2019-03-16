import React from 'react';
import styles from './HeaderUserIcon.module.scss';

const HeaderUSerIcon = ({iconUrl}) =>{

    return(
        <img src={iconUrl} alt='user profile' className={styles.userImage} />
    )
}
export default HeaderUSerIcon;