import React from 'react';

const DetailItem = ({value, type, href})=>{

    const Tag = type==='link' ? 'a' : 'p';

    return(
        <Tag
            href={type==='link' ? href : null}
        >{value}</Tag>
        
    )
}
export default DetailItem;