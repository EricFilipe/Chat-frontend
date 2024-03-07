import React from 'react'
import { BackGround, BodyContainer, ChannelInfo, ChatContainer, ChatItems, ChatOptions, ChatPanel, Container, ImageProfile, JoinContainer, Message, Messages, MyMessage, OtherMessage, OtherUser, Row, SideBar, TextBox, TitleChatContainer, UserName, UsermessageContainer, UsermessageContainerLeft, UsermessageContainerRight } from './chatElements'
import ProfileImg from '../../assets/profissao-programador.jpg';
import Robot from '../../assets/robot.png';

const rooms = [
  "Geral",
  "Python",
  "PHP",
  "Javascript"
]

const Chat = (props) => {
  const [userRight, setUserRight] = [true]
  const [myMessage, setMyMessage] = [true]
  const [senderName, setSenderName] = [true]

  function renderRooms(room) {
    const currentChat = {
      chatName: room,
      isChannel: true,
      receiverId: '',
    }
    return (
      <ChatItems>
        <ImageProfile src={ProfileImg}/>
        <TitleChatContainer>
          <Row onClick={() => props.toggleChat(currentChat)} key={room}>
            {room}
          </Row>
        </TitleChatContainer>
      </ChatItems>
    )
  }
  
  function renderUser(user) {
    if(user.id === props.yourId) {
      return (
        <ChatItems>
          <ImageProfile src={ProfileImg}/>
          <TitleChatContainer>
            <Row key={user.id}>
            {user.username}
            </Row>
          </TitleChatContainer>
        </ChatItems>
      );
    }
    const currentChat = {
      chatName: user.username,
      isChannel: false,
      receiverId: user.id,
    }
    return (
      <ChatItems>
        <TitleChatContainer>
          <Row onClick={() => {
          props.toggleChat(currentChat);
          }}>
          {user.username}
          </Row>
        </TitleChatContainer>
      </ChatItems>
      
    )
  }
  
  function renderMessages(message, index) {
    return (
      <div key={index}>
        {message.sender === props.username? 
        <UsermessageContainer userRight={userRight}>
          <Message myMessage={myMessage}>
            <UserName senderName={senderName}>
              {message.sender}
            </UserName>
            {message.content}
          </Message>
        </UsermessageContainer>
        :
        <UsermessageContainer>
          <Message>
            <UserName>
              {message.sender}
            </UserName>
            {message.content}
          </Message>
          </UsermessageContainer>
        }
      </div>
    )
  }
  
  let body;
  if(!props.currentChat.isChannel || props.connectedRooms.includes(props.currentChat.chatName)) {
    body = (
      <Messages>
        {props.messages.map(renderMessages)}
      </Messages>
    );
  } else {
    body = (
      <JoinContainer>
        <img src={Robot} alt='robot'/>
        <button onClick={() => props.joinRoom(props.currentChat.chatName)}>Join {props.currentChat.chatName}</button>
      </JoinContainer>
    );
  }
  
  function handleKeyPress(e) {
    if(e.key === "Enter") {
      props.sendMessage();
    }
  }


  return (
    <Container>
      <ChatContainer>
        <SideBar>
          <h3>GRUPOS</h3>
          {rooms.map(renderRooms)}
          <h3>USUÁRIOS</h3>
          {props.allUsers.map(renderUser)}
        </SideBar>
        <ChatPanel>
          <ChannelInfo>
            {props.currentChat.chatName}
          </ChannelInfo>
          <BodyContainer>
            {body}
          </BodyContainer>
          <TextBox 
            value={props.message}
            onChange={props.handleMessageChange}
            onKeyPress={handleKeyPress}
            placeholder='say something...'
          />
        </ChatPanel>
      </ChatContainer>
    </Container>
  )
}

export default Chat