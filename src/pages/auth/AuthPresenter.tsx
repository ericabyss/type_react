import React, { Dispatch, Fragment, SetStateAction } from "react";

//import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "./AuthContainer";
import JoinForm from "../../components/auth/JoinForm";
import LoginForm from "../../components/auth/LoginForm";
 

export interface IProps {
  //Types
  //Container에서 오는 Props들의 타입들을 정의해줌
  userData: {
    studentId: string;
    password: string;
  };
  setUserData: Dispatch<
    SetStateAction<{ studentId: string; password: string }>
  >;
  onSubmit: (e: any, action: string) => void;

  form: string;
  setForm: Dispatch<SetStateAction<string>>;

  joinData: {
    studentId: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  setJoinData: Dispatch<
    SetStateAction<{
      studentId: string;
      password: string;
      firstName: string;
      lastName: string;
    }>
  >;
}
/*Presenter는 View만 보여주는 단임 */
const AuthPresenter: React.FC<IProps> = (props) => {

  return (
    <Fragment>
      {props.form === LOGIN_ACTION && <LoginForm { ...props} />}
      {props.form === JOIN_ACTION && <JoinForm { ...props} />}
    </Fragment>
  );
};

export default AuthPresenter;
