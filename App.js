import React ,{Component} from 'react';
import {BrowserRouter as Router,Link,Navlink,Redirect} from 'react-router-dom';
import './App.css';
import TeacherDashboard from './components/TeacherDashboard';
import Route from 'react-router-dom/Route';
import StudentDashboard from './components/StudentDashboard';


class App extends Component{

  state={
    loggedin:false,
    loggedIN:false
  }

  loginHandle=()=>{
    this.setState(prevState=>({
      loggedin:!prevState.loggedin
    }))
  }

  loginHandleS=()=>{
    this.setState(prevState=>({
      loggedIN:!prevState.loggedIN
    }))
  }

render(){
  return (
    
    <Router>
    <div className="App">
      <ul>
        <li>
      <Link to="/TeacherDashboard">USER TEACHER</Link>
      </li>
      
      <li>
        <Link to="/StudentDashboard">USER STUDENT</Link>
      </li>
      <li>
        <Link to="/home"><button>HOME</button></Link>
      </li>
</ul>

<input type="button" value={this.state.loggedin ? 'Log out from teacher'  : 'Log in as Teacher'} onClick={this.loginHandle.bind(this)}/>
<input type="button" value={this.state.loggedIN ? 'Log out from Student'  : 'Log in as Student'} onClick={this.loginHandleS.bind(this)}/>
<Route path="/home" exact strict render={
    ()=>{
    return(<h1>WELCOME HOME</h1>)
  }
}  />


<Route path="/TeacherDashboard" exact strict render={()=>(
  this.state.loggedin ? (<TeacherDashboard/>) : (<Redirect to="/home"/>)
)}/>


<Route path="/StudentDashboard" exact strict render={()=>(
  this.state.loggedIN ? (<StudentDashboard/>) : (<Redirect to="/home"/>)
)}/>

  </div>
  </Router>
  );
}
}
export default App;
