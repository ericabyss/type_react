import { Box, IconButton, Input } from "@material-ui/core";
import React from "react";
import { MuiPaper, useStyles } from "../../../pages/test/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Favorite } from "@material-ui/icons";


interface ICard{
    toggleLike: () => void;
    fill: boolean;
    handleText: (args: string) => void;
    text: string;
    onSubmit:() => void;
}

const CardPresenter = (props: ICard) => {

    const classes = useStyles();
    return (
        
        <MuiPaper className={classes.paper} elevation={3}>

            <Box className={classes.header}>
                <Box className={classes.avatar}>
                    
                    계정 이름
                    </Box> 
                <Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box className={classes.img_box}>
                <img 
                style={{ width: "100%", height:250}}
                    src={"/img/lo.jpg"}
                    
                    />
            </Box>
            <Box className={classes.btn_box}>
                <Box>
                    <IconButton onClick={props.toggleLike}>
                        {props.fill ? <Favorite style={{ fill: "red" }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <TurnedInNotIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                        props.onSubmit();
                        }}>
                <Input 
                        value={props.text}
                        onChange={(e)=> props.handleText(e.target.value)} />
                </form>
            </Box>
        
        </MuiPaper>
        
        );
}

export default CardPresenter;