import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131324;
`;

export const ChatContainer = styled.div`
  height: 85vh;
  width: 85vw;
  max-width: 1800px;
  background-color: #00000076;
  position: absolute;
  display: grid;
  grid-template-columns: 25% 75%;

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    grid-template-columns: 35% 65%;
  }

  @media screen and (min-width: 360px) and (max-width: 480px) {
    grid-template-columns: 45% 55%;
  }
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
  width: 100%;
  height: 100%;
  background-color: #080420;

  h3{
    color: #fff;
  }
`;

export const ChatOptions = styled.div`
 width: 100%;
 height: 80px;
 background-color: #f0f2f5;
`;

export const ChatItems = styled.div`
 box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ffffff39;
  margin: 10px 10px;
  overflow: auto;

  &::-webkit-scrollbar{
  width: 6px;
  height: 20px;
  &-thumb {
    background-color: #ffffff39;
    border-radius: 2px;
    width: 1px;
  }
  }

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
  height: 100%;
  overflow: scroll;

  &::-webkit-scrollbar{
  width: 6px;
  height: 20px;
  &-thumb {
    background-color: #ffffff39;
    border-radius: 2px;
    width: 1px;
  }
  }
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
    font-weight: bold;
    color: #fff;
`;

export const Messages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #bfbfbf;
`;

export const JoinContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 button{
  background-color: #997af0;
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: bold;
  color: #fff;
  font-size: 12px;
  }
`;