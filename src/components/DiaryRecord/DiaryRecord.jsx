import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";

export default function DiaryRecord(props){
    return(
        <Box>
           <Box sx={{
            borderRadius: 3,
            bgcolor: "#aa4c9a",
            width: 300,
            height: 400,
            
        }}>
            <Typography style={{padding: 20, fontSize: 30, fontFamily:"cursive"}}>{props.children.title}</Typography>
            <Divider/>
            <Typography style={{textAlign: 'justify'}} sx={{
                paddingLeft: 2, 
                paddingTop: 1, 
                paddingRight: 2, 
                display: '-webkit-box',
                WebkitLineClamp: 10,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'}}
            >
                {props.children.text}</Typography>
            
        </Box> 
        <Typography sx={{position: 'relative', bottom: 30, left: 100}}>{props.children.date}</Typography>
        </Box>
        
    )
}