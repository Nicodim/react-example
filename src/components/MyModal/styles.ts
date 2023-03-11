import styled from "styled-components";
import {getSize} from "../commonConponents/basicComponents/utils";
import {Colors} from "../commonConponents/basicComponents/constants/colors";
import {ModalProps} from "./types";

export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  padding: ${getSize(25)};
  background: ${Colors.White};
  min-width: ${getSize(250)};
  border-radius: ${getSize(16)};
`