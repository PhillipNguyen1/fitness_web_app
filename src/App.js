import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts/index";
import Exercises from "./Components/Exercises/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises,
      category: '',
      exercise: {}
    };
  }

  getExerciseByMuscles() {
    // Creates a new array called exercises which holds exercises sorted by muscles
    // exercises = master array, exercise = current exercise in iteration
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        // if the muscle group exist, append exercise to array. Else, create new muscle group array and add the current exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExerciseByMuscles();
    const { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises 
          exercise={exercise}
          onSelect={this.handleExerciseSelected}
          category={category}
          exercises={exercises}
        />

        <Footer 
          muscles={muscles} 
          category={category}
          onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
