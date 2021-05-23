import React from 'react'

const Itemlist = (props) => {
    const Class_Name = 'list';
    return (
        <div>           
            <p>{`SrNo: ${props.id} , Desc: ${props.title}`}</p>          
            <img src={props.thumbnailUrl} alt="" className={`${Class_Name}__img`} />
        </div>
    );
}

export default Itemlist;