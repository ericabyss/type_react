import React, { Component } from 'react';
import styled from "styled-components"
import { Card, Box, Button, Wrapper, Text } from "../styles/styles";
import { FiHeart, FiSend } from "react-icons/fi"; //아이콘
import { BsChat, BsBookmark } from "react-icons/bs"; //아이콘

 
class CardCompnent extends Component{
    render(){
        return (
    <Wrapper 
        width={"100%"} 
        height={"100%"} 
        backgroundColor={"#fafafa"}
        margin={"0px"}
        >
        <Box //카드
            alignItems={"center"}
            backgroundColor={"#ffffff"}
            flexDirection={"column"}
            width={"600px"}
            height={"900px"}
            border={"2px #BDBDBD solid"}
            border-radius={"3px"}
            boxSizing= {"content-box"} //내용물 정렬
            >
            <Box //상단 계정부분
                display={"flex"}//중요
                width={"600px"} 
                height={"60px"}
                padding={"16px 40px 16px 16px"}
                verticalAlign={"middle"}
                flexDirection={"row"}
                >
                <img src = {"/img/lo.jpg"} //계정 이미지
                     alt=""
                     style={{
                             borderRadius:30,
                             height:42,
                             width:42
                            }}
                      />
                <Text
                    padding={"8px"}>
                     계정 이름
                </Text>
            </Box>

            <Box> 
                <img src = {"/img/moon.jpg"}//게시글 이미지
                    alt=""
                    style={{
                            height:620,
                            width:600,
                            flex:1
                            }}/>
            </Box>

        <Box style={{ //버튼
                     align:"left",
                     height:45,
                     alignItems:"stretch",
                     justifyContent:"space-between"
                    }}>
            
                <Button>
                    <FiHeart size="30" />
                </Button>
                <Button>
                    <BsChat size="30" />
                </Button>
                <Button>
                    <FiSend size="30"/>
                </Button>
                
                <Button >
                    <BsBookmark size="30" />
                </Button>
                
                
        </Box>

        <Box style={{ height:40 }}>
            <Text>좋아요 101개</Text>
            
        </Box>

        <Box style={{ height:100 }}>
            {/*<Text>
                <Text style={{fontWeight:'900'}}> 계정이름 </Text>
                #인스타그램 #따라하기 #리액트네이티브
                이건 아마도 내용이겠지
           </Text>*/}

                계정 이름 
                #인스타그램 #따라하기 #리액트
                이건 아마도 내용이겠지

        </Box>
        <Box style={{ height:30 }} >

           
            댓글란
        </Box>
    </Box>
</Wrapper>
    
        );
    }
}
export default CardCompnent;