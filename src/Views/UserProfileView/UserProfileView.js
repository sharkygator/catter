import React from 'react';
import AppContext from '../../context';
import Header from '../../components/Header/Header';

const UserProfileView = ()=>{

    return(
        <AppContext.Consumer>
            {(context)=>(
                <>
                <Header />
                <h1>dupa</h1>
                </>
            )}
        </AppContext.Consumer>
    )
}
export default UserProfileView;