import React, { Component } from "react";
class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="col s12">
            <i class="input-field material-icons col s2">search</i>
            <input className="input-field col s8" id="search" type="search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
