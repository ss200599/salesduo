import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function Barr() {
    const [value, setValue] = useState(50)
    const BorderLinearProgress = withStyles(() => ({
        root: {
          height: 10,
          borderRadius: 5,
        },
        colorPrimary: {
          backgroundColor: '#f0f0f0',
        },
        bar: {
          borderRadius: 5,
          backgroundColor: '#2C70F5',
        },
      }))(LinearProgress);
    return (
        <div>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>
    );
}

export default Barr;
