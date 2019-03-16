import React from 'react';
import AppContext from '../../context';
import styles from './HeaderImage.module.scss';

const HeaderPhoto = ()=>{

    return(
        <AppContext.Consumer>
            {(context)=>(
                <div className={styles.wrapper}>
                    <img 
                        src={context.user.headerImage} 
                        alt='background'
                        className={styles.image}    
                    />
                </div>

            )}
        </AppContext.Consumer>
    )
}

export default HeaderPhoto;