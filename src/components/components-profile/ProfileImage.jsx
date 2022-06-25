import React from "react";
import "../../styling.css"

const ProfileImage = ({ image }) => {
    return (
        <div className="profile-image">
            <img src={require(`../images/engineers/${image}`)} />
        </div>
    )
}

export default ProfileImage;