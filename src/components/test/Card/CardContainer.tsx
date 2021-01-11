import React, { useState } from "react";
import CardPresenter from "./CardPresenter";

const CardContainer = () => {
    const [fill,setFill] = useState(false);
    const [text,setText] = useState("");
    const [comments,setComments] = useState([]);//괄호안 초기상태

    const toggleLike =() => { //0,1 boolean, false가 아니라 !fill이 되어야함
        //console.log(!fill)  //좋아요 상태변화
        setFill(!fill);
    };

    //args->text의 인자
    const handleText = (args: string) => { //댓글입력
        setText(args);
    }

    const onSubmit = () => {//댓글 서버에 발송
        setComments((prev)=>{//prev이전 text추가
            return [...prev, text];
        });
        setText("");//Input비우기
    }

    console.log(comments);  //댓글 콘솔에 띄우기

    return (
             <CardPresenter
                    toggleLike={toggleLike}
                     fill={fill} 
                     handleText={handleText}
                     text={text}
                     onSubmit={onSubmit}/>
    );
}

export default CardContainer;