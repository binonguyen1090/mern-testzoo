// src/components/main/main_page.js
import React from "react";
import NavBarContainer from "../nav/navbar_container";
class MainPage extends React.Component {
  render() {
    return (
      <div className='splash'>
        <NavBarContainer />
        <div className='splash-top'>
          <div className='splash-top-mid'>
            <strong>What is TestZoo?</strong>
            <div id='splash-text1'>A place where you can...</div>
            <div id='splash-text'>
              <div>Create personalized tests</div>
              <div>Determine difficulty of your questions</div>
              <div>View and take other users' tests</div>
              <div>Invite people to take your tests</div>
              <div>And so much more...</div>
            </div>
          </div>
        </div>
        
        <footer>
          <div>
            Copyright &copy; 2020 TestZoo
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;
