import React from 'react';
import {
  AppGrid,
  MethodsTypesContainer,
  BodyContainer,
  ResultContainer
} from './styles'

export default function App(){
  return (
    <AppGrid>
      <MethodsTypesContainer></MethodsTypesContainer>
      <BodyContainer></BodyContainer>
      <ResultContainer></ResultContainer>
    </AppGrid>
  );
}
