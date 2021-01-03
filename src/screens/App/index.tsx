import React, { useRef } from 'react';
import {
  AppGrid,
  ResultContainer,
} from './styles'

import BodyContainer from '../../components/BodyContainer'
import MethodsTypes from '../../components/MethodsTypes/'
import CreateRequestPopup from '../../components/CreateRequestPopup'
import { useParams } from 'react-router-dom';

export default function App(){
  const appGridRef = useRef<HTMLDivElement>(null);
  const createRequestPopupRef = useRef<HTMLDivElement>(null);
  const params = useParams() as { request:string };

  return (
    <>
      <CreateRequestPopup appRef={appGridRef} reference={createRequestPopupRef} />
      <AppGrid ref={appGridRef}>
        <MethodsTypes appRef={appGridRef} reference={createRequestPopupRef} />
        <BodyContainer params={params} />
        <ResultContainer></ResultContainer>
      </AppGrid>
    </>
  );
}
