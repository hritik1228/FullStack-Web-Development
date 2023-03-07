import { Typography } from "@mui/material";
import React from 'react'

function MuiTypography() {
  return (
    <div>
        <Typography variant="h1"> H1 heading </Typography>
        <Typography variant="h2"> H2 heading </Typography>
        <Typography variant="h3"> H3 heading </Typography>
        {/* gutterBottom- Provides bottom margin  */}
        <Typography variant="h4" component='h1' gutterBottom> H4 heading </Typography>
        <Typography variant="h5"> H5 heading </Typography>
        <Typography variant="h6"> H6 heading </Typography>

        <Typography variant="subtitle1"> Sub Title 1 </Typography>
        <Typography variant="subtitle2"> Sub Title 2 </Typography>

        <Typography variant="body1"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, expedita! </Typography>
        <Typography variant="body2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, qui! </Typography>

    </div>
  )
}

export default MuiTypography
