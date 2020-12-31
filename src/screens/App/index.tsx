import React, { useCallback } from 'react';
import {
  AppGrid,
  MethodsTypesContainer,
  BodyContainer,
  ResultContainer,
  InsomniaConfig,
  SearchAndCreateMethodContainer,
  SearchMethod,
  ButtonCreateRequest,
  IconCreateRequest
} from './styles'

const MethodsTypes = () => {
  const showPopupToCreateNewRequest = useCallback(() => {

  },[])
  return (
    <MethodsTypesContainer>
      <InsomniaConfig><h2>Insomnia</h2></InsomniaConfig>
      <SearchAndCreateMethodContainer>
        <SearchMethod type="text" placeholder="Filter" />
        <ButtonCreateRequest onClick={showPopupToCreateNewRequest}>
          <IconCreateRequest className="fas fa-plus-circle" />
        </ButtonCreateRequest>
      </SearchAndCreateMethodContainer>
    </MethodsTypesContainer>
  )
}
 
export default function App(){
  return (
    <AppGrid>
      <MethodsTypes />
      <BodyContainer></BodyContainer>
      <ResultContainer></ResultContainer>
    </AppGrid>
  );
}
