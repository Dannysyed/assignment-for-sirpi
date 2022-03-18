import { useState } from "react"

let useValid = (valuedfn) => {
    let [value, setvalue] = useState('')
    let [touch, settouch] = useState(false)

    let valueisvalid = valuedfn(value)
    let valueisinvalid = touch && !valueisvalid

    let valuehandle = (e) => {
        setvalue(e.target.value)
    }
    let valueistouched = () => {
        settouch(true)
    }
    let valuereset = () => {
        setvalue('')
    }

    return {
        value,
        valueisvalid,
        valueisinvalid,
        valueistouched,
        valuehandle,
        valuereset
    }

}
export default useValid