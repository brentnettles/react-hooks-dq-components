import React from "react";
import Logo from "./Logo.js"
import MenuLinks from "./MenuLinks.js";
import Search from "./Search.js";

function SideMenu() {
  return (
    <aside className="side-bar open">
     <div>
      <Logo/>
      <MenuLinks/>
      <Search/>
     </div>
    </aside>
  );
}

export default SideMenu;
