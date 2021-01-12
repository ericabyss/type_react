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
                    
                    </Box> 계정 이름
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
{/* 본문쓸자리 */}



{/* 댓글 표시 */}
            <div className="comment_wrapper">
                {this.state.commentList.map(item =>
                    <AddComment
                        userId={item.userId}
                        comment={item.comment}
                        idx={item.idx}
                        handleRemove={this.handleRemove}
                        key={item.idx}>
                    </AddComment>)}
            </div>
 {/*----------------------------------------*/}
            {/*}    {comments.map((comment,index) => {
                        <li>{comment}</li>
                    return (
                            <ul>{}</ul>
                        );
            })}
        */}
        
            </Box>

            {/* 댓글 입력 */}
            <Box>
                <form onSubmit={(e)=>{//댓글입력 시 리프레쉬를 방지
                    e.preventDefault();
                        props.onSubmit();
                        }}>
                <Input 
                        className="write_newComment"
                        onChange={(e)=> props.handleText(e.target.value)}
                        placeholder="댓글달기..."
                        value={props.text}
                         />
                    <button className="upload_button" onClick={this.onSubmit} style={{color: activeBtn? "#0095f6":"#c4e6fd"}}>
                        <b>게시</b>
                    </button>
                </form>
            </Box>
        
        </MuiPaper>
        
        );
}

export default CardPresenter;