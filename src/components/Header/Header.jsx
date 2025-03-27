import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header(){

    return(
        <Box sx={{
            width:'100%',
            display: 'flex',
            backgroundColor:'#ba50ae',
            padding: '20px',
            marginLeft:'220px'
        }}>
            <Typography
                variant="h5"    
            >
                trippi troppa troppa trippa
            </Typography>
        </Box>    
    )
}