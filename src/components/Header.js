import { useDispatch, useSelector } from 'react-redux';
import { authaction, contaction, modelaction } from '../store';
import classes from './Header.module.css';

const Header = (prop) => {

  let check = useSelector(state => state.auth.IsAuthenticated)
  let dispatch = useDispatch()
  let closefn = () => {
    dispatch(modelaction.show())
  }
  let logouthandle = () => {
    dispatch(authaction.logout())
  }
  let handle = () => {
    dispatch(contaction.change())
  }
  return (
    <header className={classes.header}>
      <h1>WELCOME TO SIRPI🏭</h1>
      {!check && <button onClick={closefn}>SIGNUP</button>}
      {check &&
        <nav>
          <ul>
            <li>
              <a href='/'>HOMEPAGE</a>
            </li>
            <li>
              <button onClick={handle}>Contact us</button>
            </li>
            <li>
              <button onClick={logouthandle}>Logout</button>
            </li>
          </ul>
        </nav>
      }

    </header>
  );
};

export default Header;
