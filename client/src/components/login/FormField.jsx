import React from "react";

export default ({ input, label, type, meta: { error, touched }, length }) => {
  return (
    <div className={`col s${length}`}>
      <label>{label}</label>
      <input {...input} type={type} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};
