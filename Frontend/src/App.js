import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/navbar';
import ExerciseList from './components/exerciseList';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';

function App() {
    return (
      <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={ExerciseList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
         </div>
      </Router>
  );
}

export default App;
