import React from "react";

export default ({ filter }) => {
  return (
    <div className="row">
      <form>
        <div className="col s12">
          <i className="input-field material-icons col s2">search</i>
          <input
            className="input-field col s10"
            onChange={filter}
            id="search"
            type="search"
          />
        </div>
      </form>
    </div>
  );
};
