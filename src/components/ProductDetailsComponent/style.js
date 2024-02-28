import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;
export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;
export const WrapperStyleNameProduct = styled.h1`
  margin: 0;
  color: rgb(39, 39, 42);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  word-break: break-word;
  white-space: break-spaces;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 4px;
`;
export const WrapperPriceTextProduct = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 150%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 0;
`;
export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.change-address {
    color: rgb(10, 104, 255);
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    flex-shrink: 0;
  }
`;
export const WrapperInputNumber = styled(InputNumber)`
  &.no-spinner .ant-input-number-handler-wrap {
    display: none;
  }
`;
