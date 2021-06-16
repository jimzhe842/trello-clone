import React from 'react';

const Card = () => {
    return (
        <div className="card-background">
            <div className="card ">
            <i className="edit-toggle edit-icon sm-icon"></i>
            <div className="cover-image"></div>
            <div className="card-info">
                <p>
                This is a card. Drag it onto &quot;Tried it&quot; to show it&apos;s
                done.
                </p>
            </div>
            <div className="card-icons"></div>
            </div>
        </div>
    )
}
 export default Card