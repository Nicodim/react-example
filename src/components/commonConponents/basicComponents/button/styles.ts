import styled from "styled-components";
import {getSize} from "../utils";
import {Colors} from "../constants/colors";


export const StyledButton = styled.button`
  padding: ${getSize(5)} ${getSize(15)};
  color: ${Colors.Black};
  border: none;
  border-radius: ${getSize(5)};
  background-color: ${({disabled}) => disabled ? Colors.California : Colors.MellowApricot};
  cursor: pointer;
`