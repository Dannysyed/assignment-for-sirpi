import { useDispatch, useSelector } from 'react-redux';
import { authaction } from '../store';
import classes from './Header.module.css';
const Header = (prop) => {
  let check = useSelector(state => state.auth.IsAuthenticated)
  let dispatch = useDispatch()
  let logouthandle = () => {
    dispatch(authaction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>A.Protocal with Redux</h1>
      {check &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
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
