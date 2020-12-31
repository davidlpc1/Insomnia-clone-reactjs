import React, { useRef } from 'react';
import {
  AppGrid,
  BodyContainer,
  ResultContainer,
} from './styles'

import MethodsTypes from '../../components/MethodsTypes/'
import CreateRequestPopup from '../../components/CreateRequestPopup'

export default function App(){
  const appGridRef = useRef<HTMLDivElement>(null);
  const createRequestPopupRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CreateRequestPopup reference={createRequestPopupRef} />
      <AppGrid ref={appGridRef}>
        <MethodsTypes reference={createRequestPopupRef} />
        <BodyContainer></BodyContainer>
        <ResultContainer></ResultContainer>
      </AppGrid>
    </>
  );
}
