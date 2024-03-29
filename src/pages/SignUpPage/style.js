import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px 45px 24px;
  display: flex;
  flex-direction: column;
`;
export const WrapperContainerRight = styled.div`
  width: 300px;
  background: linear-gradient(
    136deg,
    rgb(240, 248, 255) -1%,
    rgb(219, 238, 255) 85%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
`;
export const WrapperTextLight = styled.span`
  color: rgb(13, 92, 182);
  font-size: 13px;
  cursor: pointer;
`;
export const WrapperTextNote = styled.a`
  display: inline-block;
  text-decoration: underline;
  margin-left: 0px;
  font-size: 11px;
  color: rgb(120, 120, 120);
  cursor: pointer;
`;
