import { useDispatch, useSelector } from 'react-redux'
import useValid from '../../hook/validationhook'
import { modelaction } from '../../store'
import Modal from '../UI/Modal/modal'
import classes from './signin.module.css'
let Signin = (prop) => {
    let show = useSelector(state => state.mode.showmodel)
    let dispatch = useDispatch()
    let modalhandle = () => {
        dispatch(modelaction.Dontshow())
    }
    let { value: emailvalue, valuehandle: emailvaluehandle, valueisinvalid: emailisinvalid, valueistouched: emailistouched, valueisvalid: emailisvalid, valuereset: emailisreset } = useValid(value => value.includes('@'))
    let { value: namevalue, valuehandle: namevaluehandle, valueisinvalid: nameisinvalid, valueistouched: nameistouched, valueisvalid: nameisvalid, valuereset: nameisreset } = useValid(value => value != "")
    let { value: passvalue, valuehandle: passvaluehandle, valueisinvalid: passisinvalid, valueistouched: passistouched, valueisvalid: passisvalid, valuereset: passisreset } = useValid(value => value.length > 5)


    let submithandle = (e) => {
        e.preventDefault()
        console.log(emailvalue, passvalue, namevalue);
        let id = "id" + Math.random().toString(16).slice(2)
        let obj = { id: id, email: emailvalue, password: passvalue, name: namevalue }
        prop.saved(obj)
        // console.log(id);

    }
    return (
        show && <Modal>
            <div className={classes.sign}>
                <form onSubmit={submithandle}>
                    <div>
                        <label>Enter your Email</label>
                        <input onChange={emailvaluehandle} onBlur={emailistouched}></input>
                        {emailisinvalid && <p style={{ color: 'red' }}> please enter valid email</p>}
                    </div>
                    <div>
                        <label>Enter your Username</label>
                        <input onChange={namevaluehandle} onBlur={nameistouched}></input>
                        {nameisinvalid && <p style={{ color: 'red' }}>please enter valid name</p>}
                    </div>
                    <div>
                        <label>Enter your password</label>
                        <input onChange={passvaluehandle} onBlur={passistouched}></input>
                        {passisinvalid && <p style={{ color: 'red' }}>please enter valid password</p>}
                    </div>
                    <button onClick={modalhandle} style={{ margin: '10px' }}>Close</button>
                    <button>Signin</button>
                </form>
            </div>
        </Modal>



    )
}
export default Signin