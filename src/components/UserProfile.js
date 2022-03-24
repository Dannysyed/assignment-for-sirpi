import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Contextdata from '../context/contextdata';
import Contactus from './contactus';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  let esx = useContext(Contextdata)
  console.log(esx.apidata);
  let cont = useSelector(state => state.cont.show)
  console.log(cont);


  return (
    <React.Fragment>
      <main className={classes.profile}>
        <h2>Welcome to the offical website of SIRPI 😊{esx.apidata.name}💕</h2>

      </main>
      <main className={classes.profile}>
        <h2>Please hold on,The website is on the construction🔨🏗 we will get back to you soon for any queries, please contact us at the above given section...</h2>

      </main>
      {cont && <Contactus></Contactus>}
    </React.Fragment>

  );
};

export default UserProfile;
