import React from 'react'
import styled from '@emotion/styled';

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: grey;
`;
const Footer = () => {
  return (
    <StyledFooter>
    <div>Footer</div>
    </StyledFooter>
  )
}

export default Footer