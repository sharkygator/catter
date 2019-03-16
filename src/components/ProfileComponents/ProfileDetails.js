import React from 'react'
import AppContext from '../../context';
import DetailItem from '../ProfileComponents/DetailItem';
import styles from './ProfileDetails.module.scss';


const ProfileDetails = ()=>{

    return(
        <AppContext.Consumer>
            {(context)=>(
                <ul className={styles.list}>
                    <li>
                        <DetailItem 
                            type=''
                            value={context.text}
                        />
                    </li>
                    <li>
                        <DetailItem 
                            type=''
                            value={context.text}
                        />
                    </li>
                    <li>
                        <DetailItem 
                            type='link'
                            value={context.text}
                            href='https://google.com'
                        />
                    </li>
                    <li>
                        <DetailItem 
                            type=''
                            value={context.text}
                        />
                    </li>
                </ul>
            )}
        </AppContext.Consumer>
    )
}
export default ProfileDetails;