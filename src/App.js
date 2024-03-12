import './App.css';
import socket from 'socket.io-client';
import { produce } from 'immer';
import { useEffect, useState, useRef } from 'react';
import Chat from './components/ChatComponent/Chat';
import Form from './components/UserForm/UsernameForm';

const initialMessagesState = {
  Geral: [],
  Python: [],
  PHP: [],
  Javascript: []
}

const io = socket('https://chat-backend-bqdx.onrender.com');

function App() {
  const [username, setUsername] = useState('');
  const [connected, setConnected] = useState(false);
  const [currentChat, setCurrentChat] = useState({ isChannel: true, chatName: 'Geral', receiverId: '' });
  const [connectedRooms, setConnectedRooms] = useState(['Geral']);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState(initialMessagesState);
  const [message, setMessage] = useState('');
  const socketRef = useRef();
  const [activateChat, setActivateChat] = useState(false);

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    setMessage('');
  }, [messages])

  function sendMessage() {
    const payload = {
      content: message,
      to: currentChat.isChannel ? currentChat.chatName : currentChat.receiverId,
      sender: username,
      chatName: currentChat.chatName,
      isChannel: currentChat.isChannel,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
    };
    io.emit("send-message", payload);
    const newMessages = produce(messages, draft => {
      draft[currentChat.chatName].push({
        sender: username,
        content: message,
      });
    });
    setMessages(newMessages);
  }

  function roomJoinCallback(incomingMessages, room) {
    const newMessages = produce(messages, draft => {
      draft[room] = incomingMessages;
    });
    setMessages(newMessages);
  }

  function joinRoom(room) {
    const newConnectedRooms = produce(connectedRooms, draft => {
      draft.push(room);
    });

    socketRef.current.emit("join-room", room, (messages) => roomJoinCallback(messages, room));
    setConnectedRooms(newConnectedRooms);
  }

  function toggleChat(currentChat) {
    if(!messages[currentChat.chatName]) {
      const newMessages = produce(messages, draft => {
        draft[currentChat.chatName] = [];
      });
      setMessages(newMessages);
    }
    setCurrentChat(currentChat);
    setActivateChat(true);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function connect() {
    setConnected(true);
    socketRef.current = io.connect("/");
    socketRef.current.emit("join-server", username);
    socketRef.current.emit("join-room", 'Geral', (messages) => roomJoinCallback(messages, 'general'));
    socketRef.current.on("new-user", allUsers => {
      setAllUsers(allUsers);
    });
    socketRef.current.on("new-message", ({ content, sender, chatName }) => {
      setMessages(messages => {
        const newMessages = produce(messages, draft => {
          if(draft[chatName]) {
            draft[chatName].push({ content, sender });
          } else {
            draft[chatName] = [{ content, sender }];
          }
        });
        return newMessages;
      });
    });
  }

  let body;
  if(connected) {
    body = (
      <Chat 
        message={message}
        handleMessageChange={handleMessageChange}
        sendMessage={sendMessage}
        yourId={socketRef.current ? socketRef.current.id : ''}
        allUsers={allUsers}
        joinRoom={joinRoom}
        connectedRooms={connectedRooms}
        currentChat={currentChat}
        toggleChat={toggleChat}
        messages={messages[currentChat.chatName]}
        username={username}
        activateChat={activateChat}
      />
    );
  } else {
    body = (
      <Form username={username} onChange={handleChange} connect={connect} />
    );
  }

  return (
    <div className="App">
      {body}
    </div>
  );
}

export default App;
