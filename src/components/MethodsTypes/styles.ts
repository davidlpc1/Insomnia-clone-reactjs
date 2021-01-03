import styled from 'styled-components'

export const MethodsTypesContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
  border:.2px solid #3e3f3a;
`;

export const InsomniaConfig = styled('div')`
    background-color:var(--insomnia-color);
    width:100%;
    height:60px;
    color:var(--white-color);
    padding-left:10px;
    padding-top:20px;
`;

export const SearchAndCreateMethodContainer = styled('div')`
    display:flex;
    flex:1;
    padding:20px;
    min-height:60px;
    align-items: center;
    gap:10px;
`;

export const SearchMethod = styled('input').attrs({
    placeholderTextColor: "#3e3f3a"
  })`
    background-color:var(--primary-color);
    color:var(--white-color);
    border: 1px solid #3e3f3a;
    border-radius:4px;
    padding:10px;
`;

export const ButtonCreateRequest = styled('button')`
    background-color:transparent;
    cursor:pointer;
`;

export const IconCreateRequest = styled('i')`
    color:#fff;
    pointer-events:none;
`;

export const ExistRequestContainer = styled('div')`
    display:flex;
    padding:10px;
    gap:10px;
    color:var(--white-color);
    justify-content:space-between;
    align-items:center;
    background:transparent;
    cursor:pointer;
`;