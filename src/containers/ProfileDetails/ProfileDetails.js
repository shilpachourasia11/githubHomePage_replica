import React from 'react';
import people from '../../assets/images/people.png';
import locationIcon from '../../assets/images/location.png';
import mail from '../../assets/images/mail.png';

import './ProfileDetails.scss';

const ProfileDetails = props => {
  if (props.profileData) {
    const {
      bio,
      avatar_url,
      company,
      name,
      login,
      location,
      email,
    } = props.profileData;
    return (
      <div className="card col-md-4 pull-left">
        <div className="profile_detail_container">
          <div className="float-left">
            <img className="profile-pic" src={avatar_url !== null? avatar_url : "https://i.stack.imgur.com/frlIf.png"}></img>
          </div>
          <h1>
            <span className="name">{name}</span>
            <span className="handle">{login}</span>
            <span className="position">{bio}</span>
          </h1>
          <button className="edit-btn">Edit Bio</button>
          <hr/>

          <ul>
            <li>
              <img className="icons" src={people} />
              <span className="company">{company}</span>
            </li>
            <li>
              <img className="icons" src={locationIcon} />
              <span className="company">{location}</span>
            </li>
            <li>
              <img className="icons" src={mail} />
              <span className="company">{email}</span>
            </li>
          </ul>
        </div>  
      </div>
    );
  }

  return (
    <div>Loading</div>
  )
};

export default ProfileDetails;
