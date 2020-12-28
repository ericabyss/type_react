import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { LOGIN } from "../../graphql/auth";
import { LOCAL_LOGIN } from "../../graphql/auth";
import { useSnackbar } from "notistack";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";


//Container는 state를 다루거나 여러가지 이벤트 로직들을 담는 부분
const AuthContainer = () => {

const {enqueueSnackbar} = useSnackbar();

const [form, setForm] = useState(LOGIN_ACTION); //로그인 & 회원가입 State 변경으로 입력Form 변경

  //기본적으로 state의 데이터들은 set할시 기존에 있던 값에 대입하는게 아니라 새로운 데이터로 대체함.(그래서 ...spread 연산자를 많이 사용함)
  const [userData, setUserData] = useState({
    //로그인 state 데이터, setUserData는 userData를 바꾸는 setState 라는 리액트 함수임
    studentId: "",
    password: "",
  });

  const [joinData, setJoinData] = useState({
    //회원가입 데이터
    studentId: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [loginMutation] = useMutation(LOGIN);
  const [localLoginMutation] = useMutation(LOCAL_LOGIN);

  const onSubmit = async (e: any, action: string) => {
    e.preventDefault(); //새로고침 방지


    switch (action) {
      case LOGIN_ACTION:{
        try{
          const {
            data: { login : token } ,
          } = await loginMutation({
              variables:{
                studentId: userData.studentId,
                password: userData.password,
            },
          });

          if (token){
            localStorage.setItem("ACCESS_TOKEN", token);
            await localLoginMutation({
              variables:{
                token: token,
              },
            });
            enqueueSnackbar("안녕하세요", { variant:"success" });
          }else{
            localStorage.removeItem("ACCESS_TOKEN");
            enqueueSnackbar("다시 로그인 해주세요", { variant:"error" });
          }
        }catch(e) {
          localStorage.removeItem("ACCESS_TOKEN");
          enqueueSnackbar("다시 로그인 해주세요", { variant:"error" });
        }
        break;
      }
      case JOIN_ACTION:{
        try{

        }catch{

        }
        break;
      }
    }
  };

  return (
    <AuthPresenter
      userData={userData} //Props
      setUserData={setUserData} 
      onSubmit={onSubmit} 
      form={form} 
      setForm={setForm} 
      joinData={joinData} //Props
      setJoinData={setJoinData} //Props
    />
  );
};

export default AuthContainer;
