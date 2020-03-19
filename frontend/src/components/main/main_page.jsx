// src/components/main/main_page.js
import React from "react";
import NavBarContainer from "../nav/navbar_container";
class MainPage extends React.Component {
  render() {
    return (
      <div className='splash'>
        <NavBarContainer />
        <div className='splash-top'>

        </div>

        <h1>Splash page</h1>
        <h2>what up</h2>
        
        
        <footer>Copyright &copy; 2019 TestZoo</footer>
      </div>
    );
  }
}

export default MainPage;
