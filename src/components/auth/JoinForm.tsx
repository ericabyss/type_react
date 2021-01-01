import React from "react";
import { IProps } from "../../pages/auth/AuthPresenter";
import { Box, Button, Input, Wrapper} from "../../styles/styles";
import { JOIN_ACTION,LOGIN_ACTION } from "../../pages/auth/AuthContainer";

const JoinForm = (props: IProps) => {

    return ( // 회원가입
        <Wrapper 
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"} 
        height={"100vh"} 
        backgroundColor={"#ffffff"}
    >
        <Box 
            display={"flex"} 
            justifyContent={"center"}
            alignItems={"center"}
            width={"500px"} 
            height={"700px"}
            backgroundColor={"#f2f2f2"}
            border={""}
            borderRadius={"10px"}
            flexDirection={"column"}
            >
            
            <Input 
                placeholder={"Student ID"} 
                padding={"15px"} 
                width={"250px"} 
                value={props.joinData.studentId}
                onChange={(e)=>{
                    props.setJoinData({ 
                        ...props.joinData, 
                        studentId: e.target.value,
                    });
                }}
            />
            
            <Input 
                placeholder={"Password"} 
                type={"password"} 
                width={"250px"}
                margin={"20px"} 
                padding={"15px"} 
                value={props.joinData.password}
                onChange={(e)=>{
                    props.setJoinData({ 
                        ...props.joinData, 
                        password: e.target.value,
                    });
                }}
            />
            <Input 
                placeholder={"Last name"}  
                width={"250px"} 
                padding={"15px"} 
                value={props.joinData.lastName}
                onChange={(e)=>{
                    props.setJoinData({ 
                        ...props.joinData, 
                        lastName: e.target.value,
                    });
                }}
            />
            <Input 
                placeholder={"First name"} 
                width={"250px"}
                margin={"20px"} 
                padding={"15px"}
                value={props.joinData.firstName} 
                onChange={(e)=>{
                    props.setJoinData({ 
                        ...props.joinData, 
                        firstName: e.target.value
                    });
                }}
            />
           <Button 
           padding={"15px"}
           margin={"20px"} 
           width={"250px"}
           borderRadius={"1px"}
           backgroundColor={"#355ff6"}
           color={"#fff"}
           onClick={(e)=>props.onSubmit(e, JOIN_ACTION)}>
               회원가입
            </Button>
            <Button 
            padding={"15px"}
            width={"250px"}
            borderRadius={"1px"}
            backgroundColor={"#355ff6"}
            color={"#fff"}
            onClick={()=>props.setForm(LOGIN_ACTION)}>
                로그인 화면
            </Button>
            <Button 
           padding={"15px"}
           margin={"20px"} 
           width={"250px"}
           borderRadius={"1px"}
           backgroundColor={"#EEAFAF"}
           color={"#fff"}
           onClick={(e)=>props.onSubmit(e, JOIN_ACTION)}>
               초기화
            </Button>

        </Box>
    </Wrapper>
    );
};

export default JoinForm;