import React,{ useEffect, useState } from 'react';
import {
    MethodsTypesContainer,
    InsomniaConfig,
    SearchAndCreateMethodContainer,
    SearchMethod,
    ButtonCreateRequest,
    IconCreateRequest,
    ExistRequestContainer
} from './styles';
import { methods } from '../../methods';
interface MethodsTypesProps{
    reference:React.RefObject<HTMLDivElement>,
    appRef:React.RefObject<HTMLDivElement>
}

function showPopup(refOfPopup:React.RefObject<HTMLDivElement>,refOfApp:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null || refOfApp.current == null) return;
    refOfPopup.current.style.display = 'block';
    refOfApp.current.style.opacity = '0.8';
}

type RequestsAlreadyExists = Array<{ nameOfRequest:string, methodOfRequest:string }>;

export default function MethodsTypes(props : MethodsTypesProps){
    const [requestsAlreadyExists,setRequestsAlreadyExists] = useState([{nameOfRequest:'',methodOfRequest:''}] as RequestsAlreadyExists)

    useEffect(() => {
        setRequestsAlreadyExists(JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]') as RequestsAlreadyExists)
    },[ JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]')])

    return (
        <MethodsTypesContainer>
            <InsomniaConfig><h2>Insomnia</h2></InsomniaConfig>
            <SearchAndCreateMethodContainer>
            <SearchMethod type="text" placeholder="Filter" />
            <ButtonCreateRequest onClick={() => showPopup(props.reference,props.appRef)}>
                <IconCreateRequest className="fas fa-plus-circle" />
            </ButtonCreateRequest>
            </SearchAndCreateMethodContainer>
            { 
                requestsAlreadyExists.map(request => (
                    <ExistRequestContainer key={request.nameOfRequest}>
                        {request.nameOfRequest}
                        {request.methodOfRequest}
                    </ExistRequestContainer>
                ))
            }
        </MethodsTypesContainer>
    )
}