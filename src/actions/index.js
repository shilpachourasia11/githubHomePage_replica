
import axios from 'axios';

export const getProfileData = () => {
  return {
    type: 'GET_PROFILE_DATA',
    payload: axios.get('https://api.github.com/users/supreetsingh247')
    .then((resp)=> {
      return (
        axios.get('https://api.github.com/users/supreetsingh247/repos')
        .then((repos) => {
          return {
            profile: resp.data,
            repos: repos.data,
          }
        })
      )
    }),
  };
};
