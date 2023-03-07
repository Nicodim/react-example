import styled from "styled-components";
import { getSize } from "../utils";
import {Colors} from "../constants/colors";

export const StyledInput = styled.input`
  width: 100%;
  padding: ${getSize(5)} ${getSize(15)};
  margin: ${getSize(5)} 0;
  border: ${getSize(1)} solid ${Colors.California}
`