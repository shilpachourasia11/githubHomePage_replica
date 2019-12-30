import React from 'react';
import ProfileDetails from './containers/ProfileDetails/ProfileDetails';
import Overview from './containers/Overview/Overview';
import {
  getProfileData,
} from './actions';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

const App = props => {
  const dispatch = useDispatch();
  const fetch = () => dispatch(getProfileData());

  const {
    profileData,
  } = useSelector(store => { return store.mainReducer });

  React.useEffect(function() {
    fetch();
  }, []);

  // React.useEffect(() => {
  //     console.log('count changed', profileData);
  // }, [profileData])

  if(profileData === null) {
    return <div>Loading</div>
  }

  return (
    <div className="App">
      <div className="main_container">
        <ProfileDetails profileData={profileData.profile} />
        <Overview repos={profileData.repos} />
      </div>
    </div>
  );
};

export default App;
