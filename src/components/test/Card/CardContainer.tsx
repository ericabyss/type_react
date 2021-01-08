import React, { useState } from "react";
import CardPresenter from "./CardPresenter";

const CardContainer = () => {
    const [fill,setFill] = useState(false);
    const [text,setText] = useState("");
    const [comments,setComments] = useState([]);//괄호안 초기상태

    const toggleLike =() => { //0,1 boolean
        console.log(!fill)
        setFill(!fill);
    };

    //args->text인자
    const handleText = (args: string) => {
        setText(args);
    }

    const onSubmit = () => {
        setComments((prev)=>{//prev이전text추가
            return [...prev, text];
        });
        setText("");//Input비우기
    }

    console.log(comments);

    return (
    <CardPresenter
                    toggleLike={toggleLike}
                     fill={fill} 
                     handleText={handleText}
                     text={text}
                     onSubmit={onSubmit} />
    );
}

export default CardContainer;