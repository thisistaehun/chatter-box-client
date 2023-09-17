// ChatMessageStyles.ts
import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const SenderName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #aaa;
`;

export const MessageContent = styled.p`
  position: relative;
  background-color: #e1e1e1; /* 말풍선 배경색 */
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* 말풍선 모양 */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #e1e1e1 transparent transparent;
  }
`;
