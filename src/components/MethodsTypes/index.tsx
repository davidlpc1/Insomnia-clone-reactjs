import React,{ useCallback, useEffect, useState } from 'react';
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

function filterRequests(requestsAlreadyExists: RequestsAlreadyExists){
    const filteredArray = requestsAlreadyExists.filter(() => {}); 
    return filteredArray;
}

export default function MethodsTypes(props : MethodsTypesProps){
    const requestsAlreadyExists = JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]') as RequestsAlreadyExists;
    const [ filteredRequests , setFilteredRequests ] = useState(requestsAlreadyExists);
    const [ searchedRequest, setSearchedRequest ] = useState('')

    const handleSearchedRequest = useCallback(event => {
        setSearchedRequest(event.target.value)
        // setFilteredRequests(filterRequests(requestsAlreadyExists));
    },[ requestsAlreadyExists,searchedRequest ])

    useEffect(() => {
        setFilteredRequests(requestsAlreadyExists)
    },[ requestsAlreadyExists ]);

    return (
        <MethodsTypesContainer>
            <InsomniaConfig><h2>Insomnia</h2></InsomniaConfig>
            <SearchAndCreateMethodContainer>
            <SearchMethod type="text" placeholder="Filter" value={searchedRequest} onChange={handleSearchedRequest} />
            <ButtonCreateRequest onClick={() => showPopup(props.reference,props.appRef)}>
                <IconCreateRequest className="fas fa-plus-circle" />
            </ButtonCreateRequest>
            </SearchAndCreateMethodContainer>
            { 
                filteredRequests.map(request => {
                    const method = methods.filter(method => method.name.toUpperCase() === request.methodOfRequest.toUpperCase())
                    const color = method.length > 0 ? method[0].color : '#fff';

                    return(
                        <ExistRequestContainer key={request.nameOfRequest}>
                            <p>{request.nameOfRequest}</p>
                            <p style={{color}}>{request.methodOfRequest}</p>
                        </ExistRequestContainer>
                    );
                })
            }
        </MethodsTypesContainer>
    )
}