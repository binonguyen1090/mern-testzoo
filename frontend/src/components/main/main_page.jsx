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
            <div>A place where you can...</div>
            <div>
              <div>Create personalized tests</div>
              <div>Determine difficulty of each question</div>
              <div>View and take other user's tests</div>
              <div>Invite people to take your tests</div>
              <div>And so much more...</div>
            </div>
          </div>
        </div>
        
        <footer>Copyright &copy; 2019 TestZoo</footer>
      </div>
    );
  }
}

export default MainPage;
