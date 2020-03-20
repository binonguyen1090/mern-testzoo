import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import { Route } from "react-router-dom";
// import TweetsContainer from "./tweets/tweets_container";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import CreateFormContainer from "./forms/create_form_container";
import HomePageContainer from "./homepage/homepage_container";
import UserFormContainer from "./forms/user_form_container";
import FormShowContainer from "./forms/show_form_container";
import QuestionFormContainer from "./questions/create_questions_form_container";
// import ProfileContainer from "./profile/profile_container";
// import TweetComposeContainer from "./tweets/tweet_compose_container";

const App = () => (
  <div>
    <header>{/* <NavBarContainer /> */}</header>
    <Switch>
      <ProtectedRoute
        exact
        path="/users/:user_id"
        component={UserFormContainer}
      />
      <ProtectedRoute
        exact
        path="/forms/:form_id"
        component={FormShowContainer}
      />
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/forms" component={CreateFormContainer} />
      <ProtectedRoute
        exact
        path="/questions"
        component={QuestionFormContainer}
      />
    </Switch>
  </div>
);

export default App;
