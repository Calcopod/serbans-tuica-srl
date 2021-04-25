import React from 'react'
import './form-input.styles.scss'

const FormInput = ({value, handleChange, label, ...otherProps}) => (
  <div className="group">
    <input 
      className="form-input"
      value={value}
      onChange={handleChange}
      // Name, type, value, required
      { ...otherProps }
    />
    {
      label ?
      (
        // Shrink down label whenever user types in something:
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
        </label>
      )
      : null
    }
  </div>
)

export default FormInput;