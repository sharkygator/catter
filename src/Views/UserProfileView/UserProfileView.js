import React from 'react';
import AppContext from '../../context';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';

const UserProfileView = ()=>{

    return(
        <AppContext.Consumer>
            {(context)=>(
                <>
                <Header />
                <ProfileHeader />
                </>
            )}
        </AppContext.Consumer>
    )
}
export default UserProfileView;