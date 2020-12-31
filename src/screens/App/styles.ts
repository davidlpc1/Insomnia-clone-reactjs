import styled from 'styled-components'

export const AppGrid = styled('div')`
  display:grid;
  grid-template-columns: 1fr 4fr 4fr;
`;

export const MethodsTypesContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
`;

export const BodyContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
`;

export const ResultContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
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
`;

export const IconCreateRequest = styled('i')`
    color:#fff;
    pointer-events:none;
`;