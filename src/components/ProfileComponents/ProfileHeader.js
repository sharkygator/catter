import React from 'react';
import ProfileImage from '../ProfileComponents/ProfileImage';
import HeaderPhoto from './HeaderImage';
import ProfileDetails from './ProfileDetails';

const ProfileHeader = ()=>{

    return(
        <>
            <HeaderPhoto />
            <ProfileImage />
            <ProfileDetails />
        </>
    );
};

export default ProfileHeader;