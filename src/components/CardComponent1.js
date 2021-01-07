import React, { Component } from 'react';
import styled from "styled-components"
import { Card, Body, Left, Text, Box, Button, Input, Wrapper} from "../styles/styles";
import { FiHeart, FiSend } from "react-icons/fi";
import { BsChat, BsBookmark } from "react-icons/bs";
import _ from 'lodash';
 
class CardCompnent extends Component{
    render(){
        return (
    <article>
    <Card>
        <Box //상단
            display={"flex"} 
            justifyContent={"center"}
            alignItems={"center"}
            width={"600px"} 
            height={"60px"}
            backgroundColor={"#f2f2f2"}
            border={""}
            borderRadius={"10px"}
            flexDirection={"column"}>
            <Left>
                <img src = {"/img/insta2.jpg"} />
                <Body>
                    <Text>계정이름</Text>
                    <Text note>2021년 01월 08일</Text>
                </Body>
            </Left>
        </Box>

        <Box>
            <img src = {"/img/insta2.jpg"} 
                style={{
                        height:200,
                        width:null,
                        flex:1}} />
        </Box>

        <Box style={{height:45}}>
            <Left>
                <Button transparent>
                    <FiHeart />
                </Button>
                <Button transparent>
                    <BsChat />
                </Button>
                <Button transparent>
                    <FiSend />
                </Button>
                <Button transparent>
                    <BsBookmark />
                </Button>
            </Left>
        </Box>

        <Box style={{ height:40 }}>
            {/*<Text>좋아요 101개</Text>*/}
            좋아요 101개
        </Box>

        <Box>
            {/*<Text>
                <Text style={{fontWeight:'900'}}> 계정이름 </Text>
                #인스타그램 #따라하기 #리액트네이티브
                이건 아마도 내용이겠지
           </Text>*/}

                계정이름 
                #인스타그램 #따라하기 #리액트네이티브
                이건 아마도 내용이겠지
        </Box>
    </Card>
    </article>
        );
    }
}
export default CardCompnent;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})