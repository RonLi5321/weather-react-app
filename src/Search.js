import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div class="row-3">
      <div class="column-6">
        <form class="search-form" action="search">
          <input type="text" placeholder="Search City"></input>
          <button>Choose a Destination</button>
        </form>
      </div>
    </div>
  );
}
