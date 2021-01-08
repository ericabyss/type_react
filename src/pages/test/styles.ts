import { Container, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import styled from "styled-components";

//styled-component는 클래스명
//".box"  안좋음. 그래서 변수명으로 씀.  Mui머테리얼 유아이 : ()


export const useStyles = makeStyles((theme : Theme) =>
 createStyles({
    paper: {
        display:"flex",
        flexDirection:"column",
        width: 300,
        height: 400,

    },
    header:{
        display:"flex",
        alignItems: "center",
        height: 60,
        width: "100%",
        justifyContent: "space-between",
        padding: 9,

    },
    btn_box:{
        display:"flex",
        justifyContent: "space-between",
    },
    avatar:{
        height: 30,
        width: 30,
        borderRadius: "70%",
        border: "1px solid #000",
    },
    img_box: {
        borderBottom: "1px solid #eee",
        height:250,
        width:"100%"
    }
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
`;