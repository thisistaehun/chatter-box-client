// ChatHeader.tsx
import React from "react";
import { HeaderContainer } from "../styles/ChatHeaderStyles";

const ChatHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <h2>Chatter Box 📮</h2>
      <div className="user-list">{/* 사용자 목록 표시 */}</div>
    </HeaderContainer>
  );
};

export default ChatHeader;
