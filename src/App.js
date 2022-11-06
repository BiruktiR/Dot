import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseList from "./pages/courseList/CourseList";
//import NewCourse from "./pages/newCourse/NewCourse";
//import { Assignment } from "@material-ui/icons";
import  Assignment  from "./pages/assignment/Assignment";
import Quiz from "./pages/quiz/Quiz";
//import { Feedback, Message } from "@material-ui/icons";
import Chat from './pages/chat/Chat';
import  Feedback  from "./pages/feedback/Feedback";
import Message from "./pages/message/Message";
import Explore from './pages/explore/Explore';



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          {/* <Route path="/newCourse">
            <NewCourse />
          </Route> */}
           <Route path="/assignment">
            <Assignment/>
          </Route>
           <Route path="/quiz">
            <Quiz/>
          </Route>
           <Route path="/chat">
            <Chat/>
          </Route>
           <Route path="/feedback">
            <Feedback/>
          </Route>
           <Route path="/message">
            <Message/>
          </Route>
           <Route path="/explore">
            <Explore/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
