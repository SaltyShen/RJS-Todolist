import React from 'react';

const ListItem = ({list, rmFromList}) => {

    
    const listOfThings = list.length ? ( 
        list.map(things => {
            return(
            <div className="list-body" key={things.priority}>
               <div onClick={() => {rmFromList(things.priority)}}> <b>{things.priority}</b> : {things.memo}</div>
            </div>
            )
        })

    ) : (
            <div className = "list-body"><b>All Done!</b></div>   
         )
    

    return(
        <div>
            {listOfThings}
        </div>
    )

}
export default ListItem