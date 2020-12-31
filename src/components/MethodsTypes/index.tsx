import React from 'react';
import {
    MethodsTypesContainer,
    InsomniaConfig,
    SearchAndCreateMethodContainer,
    SearchMethod,
    ButtonCreateRequest,
    IconCreateRequest
} from './styles';

interface MethodsTypesProps{
    reference:React.RefObject<HTMLDivElement>,
    appRef:React.RefObject<HTMLDivElement>
}

function showPopup(refOfPopup:React.RefObject<HTMLDivElement>,refOfApp:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null || refOfApp.current == null) return;
    refOfPopup.current.style.display = 'block';
    refOfApp.current.style.opacity = '0.8';
}

export default function MethodsTypes(props : MethodsTypesProps){
    return (
        <MethodsTypesContainer>
            <InsomniaConfig><h2>Insomnia</h2></InsomniaConfig>
            <SearchAndCreateMethodContainer>
            <SearchMethod type="text" placeholder="Filter" />
            <ButtonCreateRequest onClick={() => showPopup(props.reference,props.appRef)}>
                <IconCreateRequest className="fas fa-plus-circle" />
            </ButtonCreateRequest>
            </SearchAndCreateMethodContainer>
        </MethodsTypesContainer>
    )
}