// ChatMessage.tsx
import React from "react";
import {
  MessageContainer,
  MessageContent,
  MessageHeader,
  SenderName,
  Timestamp,
} from "../styles/ChatMessageStyles";

export interface ChatMessageProps {
  sender: string;
  message: string;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  message,
  timestamp,
}) => {
  return (
    <MessageContainer>
      <MessageHeader>
        <SenderName>{sender}</SenderName>
        <Timestamp>{new Date(timestamp).toLocaleDateString()}</Timestamp>
      </MessageHeader>
      <MessageContent>{message}</MessageContent>
    </MessageContainer>
  );
};

export default ChatMessage;
