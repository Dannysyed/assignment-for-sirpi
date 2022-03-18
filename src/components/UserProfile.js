import { useContext } from 'react';
import Contextdata from '../context/contextdata';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  let esx = useContext(Contextdata)
  console.log(esx.apidata);

  return (
    <main className={classes.profile}>
      <h2>Welcome to the New world {esx.apidata.name}</h2>
    </main>
  );
};

export default UserProfile;
