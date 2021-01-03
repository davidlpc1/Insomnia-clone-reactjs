import styled from 'styled-components';

export const Container = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
  color:var(--white-color);
  border:.2px solid #3e3f3a;
`;

export const HeaderBodyContainer = styled('form')`
    display:flex;
    gap:10px;
    padding-left:5px;
    height:60px;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color:var(--white-color);
    color:var(--black-color);
`;
export const MethodOfRequest = styled('div')``;

export const UrlRequestInput = styled('input')`
    background-color:var(--white-color);
    width:100%;
    padding:5px;
    height:60px;
    color:var(--black-color);
`;

export const ButtonSendRequest = styled('button')`
    height:60px;
    background:transparent;
    padding:15px 20px;
    transition:250ms;
    &:hover {
        background:#aaa4;
    }
`;