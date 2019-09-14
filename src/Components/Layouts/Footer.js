import React, { useState } from "react";
import { Paper, Tabs, Tab} from '@material-ui/core'

const Footer = ({ muscles }) => {
  const [value, setValue] = useState(0);

  const onChange = (event, newvalue) => {
    setValue(newvalue);
  }

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={onChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="All" />
        {muscles.map((group, index) => (
          <Tab label={group} key={index} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
