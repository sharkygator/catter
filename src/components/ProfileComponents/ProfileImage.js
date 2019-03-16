import React from 'react';
import AppContext from '../../context';
import styles from './ProfileImage.module.scss';

const ProfileImage = ({type}) =>{

    return(

        <AppContext.Consumer>
            {(context)=>(
                <img 
                    src={context.user.image} 
                    alt={context.user.name} 
                    className={type==='small' ? styles.imageSmall : (type==='medium' ? styles.imageMedium : styles.image)}    
                />
            )}
        </AppContext.Consumer>
    )
};

export default ProfileImage;