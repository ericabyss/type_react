import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Auth} from "./pages";
import {Feed} from "./pages";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const LoginRoute = () => {
    return(
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth} />
            </Switch>
        </BrowserRouter>);
};

//const isLogin = false;

const LogoutRoute = () => {
    return(
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth} />
            </Switch>
        </BrowserRouter>);
};

const Routes = () => {
    const IS_LOGIN = gql`
    {
        isLogin @client 
    }

    `;


const{
            data:{isLogin},
        } = useQuery(IS_LOGIN);
    
        return isLogin ? <LoginRoute/> : <LogoutRoute/>;
    };
    
     

// 라우터에 여러 페이지를 만들어서 -> App에 임포트 시키고 -> index에서 가상돔에 넣어준다
// BrowserRouter - HTML5의 history API를 활용하여 UI를 업데이트(동적인 페이지)
// Switch - path의 충돌이 일어나지 않게 <Route>들을 관리
// Route - 요청받은 pathname에 해당하는 컴포넌트를 렌더링

//export default Routes;