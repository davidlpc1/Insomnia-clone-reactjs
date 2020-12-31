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
    reference:React.RefObject<HTMLDivElement>
}

function showPopup(refOfPopup:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null) throw new Error('That popup is null')
    refOfPopup.current.style.display = 'block';
}

export default function MethodsTypes(props : MethodsTypesProps){
    return (
        <MethodsTypesContainer>
            <InsomniaConfig><h2>Insomnia</h2></InsomniaConfig>
            <SearchAndCreateMethodContainer>
            <SearchMethod type="text" placeholder="Filter" />
            <ButtonCreateRequest onClick={() => showPopup(props.reference)}>
                <IconCreateRequest className="fas fa-plus-circle" />
            </ButtonCreateRequest>
            </SearchAndCreateMethodContainer>
        </MethodsTypesContainer>
    )
}