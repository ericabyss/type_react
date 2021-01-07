import React , { Fragment, MutableRefObject } from "react";
import styled from "styled-components"
import { img } from "../../FeedMe"
import  CardCompnent1 from "../../components/CardComponent1";

const Header = styled.div`
    display: flex;
    height: 60px;
    width: 600px;
    padding: 16px 40px 16px 16px;
    border-bottom: 1px solid rgba(var(--ce3,239,239,239),1);
    flex-direction: row;
`;

const User = styled.div`
    justyfy-content : flex-start;
    display: flex;
`;

const User_name = styled.span`
    margin-left: 12px;
    font-size: 14px;
    font-weight: bold;
    width: 500px;
    height: 40px;
`;

const More_box = styled.div`
    justyfy-content : flex-end;
    display: flex;
    width: 60px;
    height: 40px;
    margin: 0;
    padding: 0px;
`;

const Btn = styled.button`
    border: none;
    background: none;
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding: 25px 100px;
    overflow-y: scroll;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr); 
    grid-gap: 10px;
`;

const ImgBox = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    background-color : rgba(0, 0, 0, 0.8);
    width : 100%;
    height: 100%;
`;

interface IProps{ 
    scrollEl : MutableRefObject<any>;
    handleScroll: () => void;
    count: number;
    loading: boolean;
}

const FeedPresenter = (props: IProps) => {
    return(
    <Fragment>
         {props.loading ? <Overlay /> : null }
         <Wrapper 
            id="wrapper"
            ref={props.scrollEl}
         >
            <GridBox>
            {/*map함수 = >for이랑 같은 반복문 배열의 length만큼 반복해주는함수
            <Header>
                <User>
                    <User_name>[User Name]</User_name>
                </User>
            </Header>
            <More_box>
                <Btn></Btn>
            </More_box>*/}

            <CardCompnent1 />
           {/*} {img.map((element,index) => {
                if(index<props.count){
                return <ImgBox src={element.src} alt ="" />;
                }
            })}*/}
            </GridBox>
        </Wrapper>
    </Fragment>
    );
};

export default FeedPresenter;