import React, { useCallback, useState } from 'react';

import { 
  Container,
  UrlRequestInput,
  HeaderBodyContainer,
  MethodOfRequest,
  ButtonSendRequest
} from './styles';

interface BodyContainerProps {
  params:{
    request: string;
  }
}

type RequestsAlreadyExists = Array<{ nameOfRequest:string, methodOfRequest:string }>;

export default function BodyContainer(props: BodyContainerProps){
  const requestsAlreadyExists = JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]') as RequestsAlreadyExists;
  const informationOfRequiredRequest = requestsAlreadyExists.find(request => request.nameOfRequest === props.params.request)
  const [urlOfRequest,setUrlOfRequest] = useState('');
  const handleUrlChange= useCallback((event) => {
    setUrlOfRequest(event.target.value);
  },[])
  return (
    <>
      {informationOfRequiredRequest === undefined && (
        <Container>
          <UrlRequestInput disabled />
        </Container>
      )}
      {informationOfRequiredRequest !== undefined && (
        <Container>
          <HeaderBodyContainer>
            <MethodOfRequest>{informationOfRequiredRequest.methodOfRequest}</MethodOfRequest>
            <UrlRequestInput placeholder="https://api.myproduct.com/v1/users" value={urlOfRequest} onChange={handleUrlChange} />
            <ButtonSendRequest>Send</ButtonSendRequest>
          </HeaderBodyContainer>
        </Container>
      )}
    </>
  );
};