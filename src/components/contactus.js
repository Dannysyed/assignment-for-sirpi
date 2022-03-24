import { useDispatch } from "react-redux"
import { contaction } from "../store"
import Modal from "./UI/Modal/modal"

let Contactus = () => {
    let dispatch = useDispatch()
    let handle = () => {
        dispatch(contaction.change())
    }
    return (
        <Modal>
            <div style={{ border: 'solid', padding: '50px' }}>
                <div>
                    <h1>Twitter🐦</h1>
                    <a href="https://twitter.com/DANIYAL53912366">twitter</a>
                </div>
                <div>
                    <h1>Facebook📕</h1>
                    <a href="https://twitter.com/DANIYAL53912366">facebook📕</a>
                </div>
                <div>
                    <h1>Phone number📕</h1>
                    <a href="7889623054">phonenumber📕</a>
                </div>

                <button style={{ margin: '30px' }} onClick={handle}>Close</button>

            </div>
        </Modal>
    )
}
export default Contactus