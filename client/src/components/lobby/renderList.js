import React from "react";
import _ from "lodash";

export default (list, myClass) => {
  if (!_.isEmpty(list)) {
    let count = 0;
    return _.map(list, item => (
      <div key={count++} className={myClass}>
        {item}
      </div>
    ));
  }
};
