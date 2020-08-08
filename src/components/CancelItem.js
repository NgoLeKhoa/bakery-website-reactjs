import React from 'react'

function CancelItem(props) {
    const itemID = props.id
    const onClick = () => {
        itemID !== "" ? props.onRemoveItem(itemID) : props.onRemoveAllItems()
    }

    return (
        <div style={{marginLeft:"60px"}}>
            <div className="cancel-circle" onClick={() => onClick()}>
                <div className="cancel-bar-1"></div>
                <div className="cancel-bar-2"></div>
            </div>
        </div>
    )
}

export default CancelItem
