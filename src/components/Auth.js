import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Contextdata from '../context/contextdata';
import useValid from '../hook/validationhook';
import { authaction } from '../store';
import classes from './Auth.module.css';

const Auth = (prop) => {
  //getting from provider
  let esx = useContext(Contextdata)

  let [statedata, getdata] = useState([])
  let getapi = async function () {
    let response = await fetch(`https://httppract-2693e-default-rtdb.asia-southeast1.firebasedatabase.app/signup.json`)
    let data = await response.json()
    console.log(data);
    let newdata = []
    for (const key in data) {
      newdata.push({
        id: data[key].id,
        email: data[key].email,
        password: data[key].password,
        name: data[key].name
      })

    }
    console.log(newdata);
    getdata(newdata)

  }



  useEffect(() => {
    getapi()
  }, [])
  let { value: emailvalue, valuehandle: emailvaluehandle, valueisinvalid: emailisinvalid, valueistouched: emailistouched, valueisvalid: emailisvalid, valuereset: emailisreset } = useValid(value => value.includes('@'))
  let { value: passvalue, valuehandle: passvaluehandle, valueisinvalid: passisinvalid, valueistouched: passistouched, valueisvalid: passisvalid, valuereset: passisreset } = useValid(value => value.length > 5)
  let formisvalid = false
  // defining how to check the already data of users by using find method
  let find = statedata.find(val => val.email == emailvalue)
  //giving the value to provider
  esx.getdatafrom(find)
  console.log(find?.password);
  if (find?.password == passvalue) {
    // alert('succesfulloggin')
    formisvalid = true


  }
  else {
    let formisinvalid = false
  }
  let dispatch = useDispatch()


  let submithandle = (e) => {
    e.preventDefault()
    console.log(emailvalue, passvalue);

    dispatch(authaction.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submithandle}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={emailvaluehandle} onBlur={emailistouched} />
            {emailisinvalid && <p style={{ color: 'red' }}>Enter the correct email</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={passvaluehandle} onBlur={passistouched} />
            {passisinvalid && <p style={{ color: 'red' }}>Enter the correct password</p>}

          </div>
          <button onClick={prop.notrue} disabled={!formisvalid}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
