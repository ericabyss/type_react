import React from "react";
import { IProps } from "../../pages/auth/AuthPresenter";
import { Box, Button, Input, Wrapper} from "../../styles/styles";
import { JOIN_ACTION,LOGIN_ACTION} from "../../pages/auth/AuthContainer";

const LoginForm = (props: IProps) => {

    return  (// 로그인
    <Wrapper 
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"} 
        height={"100vh"} 
        backgroundColor={"#ffffff"}>
    <Box 
        display={"flex"} 
        justifyContent={"center"}
        alignItems={"center"}
        width={"400px"} 
        height={"500px"}
        backgroundColor={"#f2f2f2"}
        border={""}
        borderRadius={"10px"}
        flexDirection={"column"}> {/*//column은 세로정렬 row는 가로정렬*/}
    <img
        src={ "/img/insta2.jpg" }
        alt="" 
        style={{
            position: "absolute", 
            width:"80%", 
            height: "17%", 
            top:10,
            borderRadius:"5px"
        }}
    />
        <Input 
            placeholder={"Student ID"} 
            padding={"15px"} 
            width={"250px"} 
            value={props.userData.studentId}
            borderRadius={"5px"}
            onChange={(e)=>{
                props.setUserData({
                    ...props.userData, //... spread연산자 , Obejct나 Array의 데이터들을 얕은 복사를 해줌,
                    studentId: e.target.value
                });
            }}
        />
        <Input 
            placeholder={"Password"} 
            type={"password"} 
            width={"250px"}
            margin={"20px"} 
            padding={"15px"} 
            borderRadius={"5px"}
            value={props.userData.password}
            onChange={(e)=>{
                props.setUserData({ 
                    ...props.userData, 
                    password: e.target.value,
                });
            }}
        />
        <Button 
            padding={"15px"}
            margin={"5px"} 
            width={"250px"}
            backgroundColor={"#355ff6"}
            borderRadius={"5px"}
            color={"#fff"}
            onClick={(e)=>props.onSubmit(e, LOGIN_ACTION)}>
                로그인
        </Button>
        <Button 
            padding={"15px"}
            margin={"20px"} 
            width={"250px"}
            borderRadius={"5px"}
            backgroundColor={"#355ff6"}
            color={"#fff"}
            onClick={()=>props.setForm(JOIN_ACTION)}>
                회원가입
        </Button>

    </Box>
</Wrapper>
);
};

export default LoginForm;