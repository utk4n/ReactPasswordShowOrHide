import {useEffect, useRef, useState} from "react";
const Input = ({type = 'text', ...props}) => {


    const ref = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)


    useEffect(() => {
		if (show) {
			setType('text')
			ref.current.focus()
		} else if (type === 'password') {
			setType('password')
			ref.current.focus()
		}
	}, [show])

    return (
       <div className="input_content">
            <input ref={ref} type={inputType} {...props}/>
            {type === "password" && props?.value && (
                <button type="button" onClick={() => setShow(show => !show)} >
                    {show ? "Hide" : "Show"}
                </button>
            )}
        </div>
    )
}

export default Input