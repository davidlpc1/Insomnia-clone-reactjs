import styled from 'styled-components'

export const AppGrid = styled('div')`
  display:grid;
  grid-template-columns: 1fr 4fr 4fr;
  transition:200ms ease-in-out;
`;

export const BodyContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
`;

export const ResultContainer = styled('div')`
  background-color:var(--primary-color);
  height:100vh;
`;