import React from 'react';
import './Input.css';
const input = props => {
  let configInput = (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
  if (props.type === 'select') {
    configInput = (
      <select name={props.name} id={props.id}>
        {props.option.map(value => (
          <option value={value}>{value}</option>
        ))}
      </select>
    );
  }
  if (props.type === 'textArea') {
    configInput = (
      <textarea name={props.name} placeholder={props.placeholder}></textarea>
    );
  }
  return <div className="col span-2-of-3">{configInput}</div>;
};
export default input;
