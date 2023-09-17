// ChatMessageList.tsx
import React from "react";
import { MessageListContainer } from "../styles/ChatMessageListStyles";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";

export interface ChatMessageListProps {
  messages: ChatMessageProps[];
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
}) => {
  return (
    <MessageListContainer>
      {messages.map((msg, index) => (
        <ChatMessage key={index} {...msg} />
      ))}
    </MessageListContainer>
  );
};

export default ChatMessageList;
