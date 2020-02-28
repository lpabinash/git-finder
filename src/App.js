import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import axios from 'axios';
// import Username from './Username';
import User from './user';
import Search from './Search'

class App extends React.Component {
  state={
    users:[],
    loading:false
  }

  searchUsers= async(text)=>{
    this.setState({loading:true});
    const resp= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`);
    this.setState({users:resp.data.items, loading:false})
    console.log(resp.data);
  }


  render(){
    return (
      <div className="App">
       <Navbar title='Git Finder' icon='fab fa-github' />
       
       {/* <Username/> */}
       <div className='container'>
       <Search searchUsers={this.searchUsers} />
       <User loading={this.state.loading} users={this.state.users} />
       </div>
      </div>
    );
  }
}

export default App;
