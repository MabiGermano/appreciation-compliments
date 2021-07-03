import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name:string,
  label:string,
  type:string
}

export default function Input({ name, label, type, ...rest }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </div>
  );
}