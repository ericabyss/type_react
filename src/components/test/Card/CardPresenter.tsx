import { Box, IconButton, Input } from "@material-ui/core";
import React from "react";
import { MuiPaper, useStyles } from "../../../pages/test/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Favorite } from "@material-ui/icons";
import { getArgumentValues } from "graphql/execution/values";
import { Text } from "../../../styles/styles";


interface ICard{
    toggleLike: () => void;
    fill: boolean;
    handleText: (args: string) => void;
    text: string;
    onSubmit:(arg: string) => void;
    comments: Array<{ squares: Array<string> }>;
}

const CardPresenter = (props: ICard) => {

    const classes = useStyles();
    return (
        
        <MuiPaper className={classes.paper} elevation={3}> {/*elevation : 종이 섀도우*/}

            <Box className={classes.header}>
                <Box display={"flex"} flex-direction={"row"}>
                    <img className={classes.avatar} src={"/img/images.jpg"} />
                    <span className={classes.name}> trond._.s </span>
                        
                </Box>
                <Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box className={classes.img_box}>
                <img 
                    className={classes.img_box}
                    src={"/img/lo.jpg"}/>
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
            <Box className={classes.count}>조회수 12,121회</Box>
            <Box>
                <Box className={classes.prag_b} display={"flex"} flex-direction={"row"}>{/* 본문쓸자리 */}
                        <span className={classes.com1}>trond._.s</span>
                        &nbsp;
                        <span text-overflow={"ellipsis"}>{/*줄바꿈해주는줄*/}
                            이것은 아마도 본문일껄ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ줄바꿈되라
                        </span> 
                </Box>
                <Box>{/* 댓글 표시 */}
                    <div className={classes.prag_c}>
                        {props.comments.map((comment, index) => (
                            /*<Box display={"flex"} flex-direction={"column"}>*/
                            <ul key={index}><li className={classes.line}><span className={classes.com1}>gamzya</span> &nbsp; {comment}</li></ul>
                            /*</Box>*/
                            ))}
                    </div>
                </Box>
            </Box>
            <Box className={classes.prag_c}>{/* 댓글 입력 */}
                <form onSubmit={(e)=>{//댓글입력 시 리프레쉬를 방지
                    e.preventDefault();
                        props.onSubmit(props.text);
                        }}>
                    <Input 
                            className={classes.input_com}
                            onChange={(e)=> props.handleText(e.target.value)} //handleChange
                            placeholder="댓글달기..."
                            value={props.text} />
                </form>
            </Box>
        
        </MuiPaper>
        
        );
}

export default CardPresenter;