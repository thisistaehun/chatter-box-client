// ChatInput.tsx
import React, { useState } from "react";
import {
  InputContainer,
  InputField,
  SendButton,
} from "../styles/ChatInputStyles";

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim() !== "") {
      if (e.nativeEvent instanceof KeyboardEvent) {
        if (e.nativeEvent.isComposing) {
          return;
        }
      }
      sendMessage();
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SendButton onClick={sendMessage}>전송</SendButton>
    </InputContainer>
  );
};

export default ChatInput;
