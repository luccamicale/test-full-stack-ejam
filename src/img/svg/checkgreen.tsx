import React from "react";

import styled from "styled-components";

const StyledCircle = styled.svg`
  width: 40px;
  height: 40px;

  @media only screen and (max-width: 740px) {
    width: 20px;
    height: 20px;
    margin-left: 30%;
  }
`;


export default function CheckGreen() {
  return (
    <StyledCircle xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Círculo verde */}
      <circle cx="20" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />

      {/* Tick blanco */}
      <path d="M12 20L18 26L28 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </StyledCircle>
  );
}
