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

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const request = await fetch(urlOfRequest,{
      method:informationOfRequiredRequest?.methodOfRequest,
    })
    console.log(request)
  },[ urlOfRequest,informationOfRequiredRequest ])

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
          <HeaderBodyContainer onSubmit={handleSubmit}>
            <MethodOfRequest>{informationOfRequiredRequest.methodOfRequest}</MethodOfRequest>
            <UrlRequestInput type="url" required placeholder="https://api.myproduct.com/v1/users" value={urlOfRequest} onChange={handleUrlChange} />
            <ButtonSendRequest type="submit">Send</ButtonSendRequest>
          </HeaderBodyContainer>
        </Container>
      )}
    </>
  );
};