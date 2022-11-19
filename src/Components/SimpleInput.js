import React from 'react'

const SimpleInput = (props) => {
    const {label,type,required,value,onChange,width}=props

    return (
    <div>
<input 
type={type}
label={label}
required={required}
value={value}
onChange={onChange}
width={width}
/>

    </div>
  )
}

export default SimpleInput