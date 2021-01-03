import styled from 'styled-components';

export const Container = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
  color:var(--white-color);
  border:.2px solid #3e3f3a;
`;

export const UrlRequestInput = styled('input')`
    background-color:var(--white-color);
    width:100%;
    height:60px;
    color:var(--black-color);
`;

export const HeaderBodyContainer = styled('div')`
    display:flex;
    padding:10px;
    gap:10px;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color:var(--white-color);
    color:var(--black-color);
`;
export const MethodOfRequest = styled('div')``;
export const ButtonSendRequest = styled('button')``;