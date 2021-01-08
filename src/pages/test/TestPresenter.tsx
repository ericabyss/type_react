import React from "react";
import { img } from "../../ImgData";
import { MuiContainer } from "./styles";
import CardContainer from "../../components/test/Card/CardContainer";

const TestPresenter = () => {
return(
    <MuiContainer>
    {img.map((e) => {
        
        return <CardContainer />;
        
        })}
    </MuiContainer>
    );
};


export default TestPresenter;