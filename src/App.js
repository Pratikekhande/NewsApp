//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  
  Routes , 
  Route, 
  Link
 } from "react-router-dom";
 //import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  render() {
   //const pageSize = 10;
   
    return ( <div>

      <Router>
     
       <Navbar/>
       {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
       
       <Routes>
         <Route  exact path="/Home" element={<News   key="general" pageSize={9} country="in" category="general" />}/>
         <Route exact path="/business" element={<News   key="Business" pageSize={9} country="in" category="Business" />}/>
         <Route exact path="/entertainment" element={<News   key="Entertainment" pageSize={9} country="in" category="Entertainment" />}/>
         <Route exact path="/general" element={<News   key="General" pageSize={9} country="in" category="General" />}/>
         <Route exact path="/health" element={<News   key="Health" pageSize={9} country="in" category="Health" />}/>
         <Route exact path="/science" element={<News   key="Science" pageSize={9} country="in" category="Science" />}/>
         <Route exact path="/sports" element={<News key="Sports" pageSize={9} country="in" category="Sports" />}/>
         <Route exact path="/technology" element={<News  key="Technology" pageSize={9} country="in" category="Technology" />}/>

       </Routes>
     
      </Router>
      </div>
    )
  }
} 
