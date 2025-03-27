import { Outlet } from "react-router-dom";
import Header from '../Header/Header'
import {theme} from "../consts/theme"
import DrawerLeft from '../Drawer/Drawer';
import { ThemeProvider } from '@emotion/react';


export default function MainLayout(){
    return (
        <ThemeProvider theme={theme}>
          <div>
            <Header/>
            <DrawerLeft/>
            <main style={{ marginLeft: '220px', padding: '20px'}}>
              <Outlet/>
            </main>
            
          </div>  
        </ThemeProvider>
      );
}