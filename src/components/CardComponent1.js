import React, { Component } from 'react';
//import styled from "styled-components"
import { Card, Box, Button, Wrapper } from "../styles/styles";
import { FiHeart, FiSend } from "react-icons/fi"; //아이콘
import { BsChat, BsBookmark } from "react-icons/bs"; //아이콘
//import _ from 'lodash';
 
class CardCompnent extends Component{
    render(){
        return (
    <Wrapper 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"} 
            height={"100vh"} 
            backgroundColor={"#fafafa"}>
   
    <Box
        display={"flex"} 
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#ffffff"}
        border={""}
        flexDirection={"column"}
        width={"600px"}
        height={"860px"}
        align={"center"}
        border={"3px #f2f2f2 solid"}>

        <Box //상단 계정부분
            width={"600px"} 
            height={"60px"}
            borderRadius={"10px"}
            flexDirection={"column"}>
                <img src = {"/img/lo.jpg"}
                    alt=""
                    style={{
                    borderRadius:30,
                    height:42,
                    width:42,
                    flex:1}} /> {/*계정 이미지*/}
                {/*<Body>
                    <Text>계정이름</Text>
                    <Text note>2021년 01월 08일</Text>
                </Body>*/}
                 계정이름 
        더보기 버튼
        </Box>

        <Box> {/* 게시글 이미지 */}
            <img src = {"/img/insta2.jpg"}
                alt=""
                style={{
                        height:620,
                        width:600,
                        flex:1}} />
        </Box>

        <Box style={{
                    align:"left",
                    height:45,
                    justifyContent:"start",
                    alignItems:"stretch"
                    }}> {/*버튼란*/}
            
                <Button>
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
    </Box>
</Wrapper>
    
        );
    }
}
export default CardCompnent;
 
/*const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})*/