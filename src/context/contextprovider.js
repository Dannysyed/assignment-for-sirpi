import { useState } from "react"
import Contextdata from "./contextdata"

let Contextprovider = (prop) => {
    let [storedata, getdata] = useState([])
    let getdatafromapi = (item) => {
        getdata(item)

    }
    console.log(storedata);

    return (
        <Contextdata.Provider value={{ apidata: storedata, getdatafrom: getdatafromapi }}>{prop.children}</Contextdata.Provider>
    )
}
export default Contextprovider