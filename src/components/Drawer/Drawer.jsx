import * as React from "react";
import { drawerList } from "../consts/drawerList";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemText, ListItemButton, Toolbar, ListItemIcon } from "@mui/material";
import Typography from "@mui/material/Typography";
import './Drawer.css'
import { useNavigate } from "react-router-dom";

export default function DrawerLeft(){
    const navigate = useNavigate();
    return (
        <div>
            <Drawer
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper':{
                    width: 220,
                    boxSizing: 'border-box'
                }
            }}
            variant="permanent"
            anchor="left"
        >   
            <Toolbar>
                
                <Typography style={{color:"#f0b3e3", fontFamily:"cursive", fontSize: 30}} onClick={()=>navigate("/")} >Emory</Typography>
            </Toolbar>
            <List>
            {drawerList.map((text, index) => (
                <ListItem onClick={()=> navigate(text.navigate)}>
                    <ListItemButton>
                        <ListItemIcon sx={{color: "#fff"}}>
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={<Typography style={{color:"#f0b3e3", fontFamily:"cursive"}}>{text.title}</Typography>}/>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        </div>
    )
}