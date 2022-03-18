import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import Signin from './components/Signin/signin';
import UserProfile from './components/UserProfile';
import Contextprovider from './context/contextprovider';
import { authaction, counteraction, modelaction } from './store';


function App() {
  let check = useSelector(state => state.auth.IsAuthenticated)
  let dispatch = useDispatch()
  localStorage.setItem('isloggedin', '1')
  let closefn = () => {
    dispatch(modelaction.show())
    let loggedin = localStorage.getItem('isloggedin')
    if (loggedin === '1') {
      // alert('hello')
    }
  }
  let Postapi = async function (datas) {
    let response = await fetch(`https://httppract-2693e-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json`, { method: 'POST', headers: { 'content-type': 'react/app' }, body: JSON.stringify(datas) })
    let data = await response.json()

  }
  // let data = 1

  return (
    <Contextprovider>
      <Header></Header>
      <button onClick={closefn}>SIGNUP</button>
      <Signin saved={Postapi}></Signin>
      {!check && <Auth></Auth>}
      {check && <UserProfile></UserProfile>}
      {/* <Counter /> */}

    </Contextprovider>
  );
}

export default App;
