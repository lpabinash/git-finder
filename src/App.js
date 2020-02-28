import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import axios from 'axios';
// import Username from './Username';
import User from './user'

class App extends React.Component {
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    this.setState({loading:true});
    const resp= await axios.get('https://api.github.com/users');
    this.setState({users:resp.data, loading:false})
    console.log(this.state.users);
  }

  render(){
    return (
      <div className="App">
       <Navbar title='Git Finder' icon='fab fa-github' />
       {/* <Username/> */}
       <div className='container'>
       <User/>
       </div>
      </div>
    );
  }
}

export default App;
