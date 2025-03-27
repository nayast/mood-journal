import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DiaryRecord from '../components/DiaryRecord/DiaryRecord';
import {diaryData} from '../components/consts/diaryRecord'
import { Grid } from '@mui/material';

export default function Diary() {
    return (
      <div>
        <h1>Дневник</h1>
        <Grid container spacing={2}>
          {diaryData.map((text) =>(
            
            <DiaryRecord>
              {text}</DiaryRecord>
          ))}
        </Grid>
        

        
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color='primary' aria-label='add' sx={{position: 'fixed', bottom: '16px', right: '16px'}}>
            <AddIcon />
          </Fab> 
        </Box>
        
      </div>
    );
  }