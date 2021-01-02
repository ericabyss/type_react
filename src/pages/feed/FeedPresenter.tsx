import React,{ Fragment, MutableRefObject } from "react";
import styled from "styled-components"
import {img} from "../../ImgData"


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
    width: 100%
    border-radius: 10px;
`;

interface IProps{
    scrollEl : MutableRefObject<any>;
    handleScroll: () => void;
}

const FeedPresenter = (props: IProps) => {
    return(
     <Fragment>
         <Wrapper 
            id="wrapper"
            ref={props.scrollEl}
            onScroll={()=>console.log("scroll", props.scrollEl)}
         >
            <GridBox>
            {/*map함수 = >for이랑 같은 반복문 배열의 length만큼 반복해주는함수*/}
            {img.map((element,index) => {
                return <ImgBox src={element.src} alt ="" />;
            })}
            </GridBox>
        </Wrapper>
    </Fragment>
    );
};


export default FeedPresenter;