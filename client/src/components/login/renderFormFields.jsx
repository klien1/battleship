import React from "react";
import _ from "lodash";
import { Field } from "redux-form";
import FormField from "./FormField";

const renderFormFields = fieldList => {
  return _.map(fieldList, ({ label, name, type, length }) => {
    return (
      <Field
        length={length}
        key={name}
        label={label}
        type={type}
        name={name}
        component={FormField}
      />
    );
  });
};

export default renderFormFields;
