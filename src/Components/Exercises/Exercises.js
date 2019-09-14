import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

// css styling
const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

// Array of arrays of categories passed down as props
const Exercises = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => {
  return (
    <Grid container>
      {/* Left Pane */}
      <Grid item sm>
        <Paper style={styles.Paper}>
          {/* Iterate through array and destructure every element */}
          {/* First index is categories, second index is the array of exercises */}
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {/* Iterates through exercise for muscle group */}
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>

      {/* Right Pane */}
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
