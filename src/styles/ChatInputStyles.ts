// ChatInputStyles.ts
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  background-color: #f5f6fa;
  padding: 10px;
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  margin-right: 8px;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  background-color: #00a8ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
`;
