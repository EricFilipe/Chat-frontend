import styled from "styled-components";

export const Container = styled.div`
   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e2e1de;
`;

export const BackGround = styled.div`
 background-color: #00a884;
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const ChatContainer = styled.div`
  width: 95%;
  max-width: 1800px;
  height: 95%;
  background-color: #fff;
  position: absolute;
  display: flex;
`;

export const UsermessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({userRight}) => userRight? 'flex-end' : 'flex-start'};
  box-sizing: border-box;
  padding: 0 20px;
  margin: 2px 0;
`;

export const Message = styled.div`
 background-color: ${({myMessage}) => myMessage? '#d9fdd3' : '#fff'};
 padding: 10px;
 border-radius: 5px;
`;

export const UserName = styled.div`
 color: ${({senderName}) => senderName? 'green' : 'black'};
 font-weight: bold;
 display: flex;
`;

export const SideBar = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid #e6e6e6;
`;

export const ChatOptions = styled.div`
 width: 100%;
 height: 80px;
 background-color: #f0f2f5;
`;

export const ChatItems = styled.div`
 box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #f0f2f5;
  border-bottom: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TitleChatContainer = styled.div`
display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const ImageProfile = styled.img`
width: 60px;
  height: auto;
  border-radius: 50%;
`;

export const ChatPanel = styled.div`
    height: 100;
    width: 85%;
    display: flex;
    flex-direction: column;
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 75%;
    overflow: scroll;
    border-bottom: 1px solid black;
`;

export const TextBox = styled.textarea`
    height: 15%;
    width: 100%;
`;

export const ChannelInfo = styled.div`
    height: 10%;
    width: 100%;
    border-bottom: 1px solid black;
`;

export const Row = styled.div`
    cursor: pointer;
    font-size: 18px;
`;

export const Messages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #bfbfbf;
`;