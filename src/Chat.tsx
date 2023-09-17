// Chat.tsx
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import { ChatMessageProps } from "./components/ChatMessage";
import ChatMessageList from "./components/ChatMessageList";

const socket: Socket = io("http://localhost:3099");

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [sender, setSender] = useState<string>(
    "유저" + `${Math.random()}`.slice(2, 5)
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("chat", (data: ChatMessageProps) => {
      setMessages([...messages, data]);
    });

    return () => {
      socket.off("chat");
    };
  }, [messages]);

  const sendMessage = (message: string) => {
    if (message.trim() !== "") {
      socket.emit("chat", { sender, message, timestamp: new Date() });
    }
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMessageList messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
