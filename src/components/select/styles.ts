import styled from "styled-components";
import {getSize} from "../commonConponents/basicComponents/utils";
import {Colors} from "../commonConponents/basicComponents/constants/colors";

export const SelectContainer = styled.select`
  margin: ${getSize(15)} 0;
  border-top: ${getSize(1)} solid ${Colors.Black}
`