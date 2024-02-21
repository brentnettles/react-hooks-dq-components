import React from "react";
import AlbumList from "./AlbumList.js"
import GenrePicker from "./GenrePicker.js";
import TopMenu from "./TopMenu.js";



function MainContent() {
  return <div><main>
    <TopMenu/>
    <GenrePicker/>
    <AlbumList/>
    
   
  </main>
  </div>;
}

export default MainContent;
