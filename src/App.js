import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts/index";
import Exercises from "./Components/Exercises/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises
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

  render() {
    const exercises = this.getExerciseByMuscles();
    console.log(exercises);
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises}/>

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
