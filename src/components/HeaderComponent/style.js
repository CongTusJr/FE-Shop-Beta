import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(255, 190, 152);
  align-item: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-item: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
  white-space: nowrap;
`;

export const WrapperHeaderCart = styled.div`
  display: flex;
  align-item: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
  white-space: nowrap;
`;
