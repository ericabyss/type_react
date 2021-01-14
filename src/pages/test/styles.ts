import { Container, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";//추가
import styled from "styled-components";

//TEST STYLE
//styled-component는 클래스명
//".box" 안좋음. 그래서 변수명으로 씀.  Mui:머테리얼 유아이 : ()


export const useStyles = makeStyles((theme : Theme) =>
 createStyles({
    paper: {//card
        display:"flex",
        flexDirection:"column",
        width: 500,
        height: "header+img_box"//?왜되는걸까
    },
    header:{//계정정보
        display:"flex",
        alignItems: "center",
        height: 60,
        width: "100%",
        justifyContent: "space-between", //아이콘 사이를 띄워주는 역할
        padding: 9
    },
    btn_box:{//버튼 사이 띄워주기
        display:"flex",
        justifyContent: "space-between",
    },
    avatar:{//계정사진
        display:"flex",
        height: "10%",
        width: "10%",
        borderRadius: "70%",
        border: "1px solid #fff",
    },
    img_box: {//본문사진
        borderBottom: "1px solid #eee",
        height:450,
        width:"100%"
    },
    avat:{//계정사진
        display:"flex",
        height: "10%",
        width: "10%",
        borderRadius: "70%",
    },
    prag: {//본문
        position: "relative",
        left: 10,
        width:"100%"
    },
    input_com: {//댓글 입력창
        position: "relative",
        width:"98%",
        //textDecoration:"none"
        borderBottom: "#fff"
    },
    com1: {//이름 굵게
        fontWeight:"bold"
    },
    })
);

export const MuiContainer = styled(Container)`
    height: 100vh;
`;

/*export const MuiContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;*/


export const MuiPaper = styled(Paper)`
    margin: 12px auto; 
`;//페이지를 가운데로 정렬  