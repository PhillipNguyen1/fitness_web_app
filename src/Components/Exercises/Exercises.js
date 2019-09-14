import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto'
  }
};

const Exercises = ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            <Fragment>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h6">
            Welcome
          </Typography>
          <Typography variant="subtitle1">
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
