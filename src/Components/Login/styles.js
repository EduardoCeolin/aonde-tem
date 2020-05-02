import styled from "styled-components/native";
import { Gray } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  padding: 25% 8%;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.Image``;

export const LogoArea = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text``;

export const Social = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  margin: 12px 0;
`;

export const Face = styled.Image``;
export const Google = styled.Image``;

export const CheckArea = styled.TouchableOpacity`
  width: 60%;
  align-self: flex-start;
  padding-left: 6px;
  margin-left: 12px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const SaveAcc = styled.Text`
  margin-left: -12px;
  font-size: 14px;
  color: ${Gray};
`;
export const CheckInner = styled.View`
  width: 30%;
`;

export const BtnArea = styled.View`
  width: 90%;
  margin: 10% 0 8px 0;
`;

export const Forgot = styled.TouchableOpacity`
  padding-right: 20%;
  width: 100%;
  margin-bottom: 10%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const ForgotText = styled.Text`
  font-size: 12px;
  color: ${Gray};
`;

export const CreateAcc = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateText = styled.Text`
  font-size: 14px;
  color: ${Gray};
`;