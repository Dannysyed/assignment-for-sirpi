import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import Signin from './components/Signin/signin';
import UserProfile from './components/UserProfile';
import Contextprovider from './context/contextprovider';
import { authaction, counteraction, modelaction } from './store';


function App() {
  let check = useSelector(state => state.auth.IsAuthenticated)
  let dispatch = useDispatch()
  localStorage.setItem('isloggedin', '1')

  let Postapi = async function (datas) {
    let response = await fetch(`https://httppract-2693e-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json`, { method: 'POST', headers: { 'content-type': 'react/app' }, body: JSON.stringify(datas) })
    let data = await response.json()

  }

  return (
    <Contextprovider>
      <Header></Header>
      <Signin saved={Postapi}></Signin>
      {!check && <Auth></Auth>}
      {check && <UserProfile></UserProfile>}
      <p style={{ color: 'white', marginTop: '350px' }}>please note:this website is connected firebasedatabase so either signup or use (EMAIL:new@gmail.com) (password:1234567) to loggin
        and dont forget to refresh after signin</p>
    </Contextprovider>
  );
}

export default App;
