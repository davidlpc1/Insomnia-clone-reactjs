import React, { useCallback, useState } from 'react';
import {
    CreateRequestContainer ,
    CreateRequestHeader,
    CreateRequestHeaderButton,
    CreateRequestHeaderIcon,
    CreateRequestForm,
    CreateRequestLabel,
    CreateRequestInputGroup,
    CreateRequestNameInput,
    CreateRequestActionContainer,
    CreateRequestInfoAction,
    CreateRequestActionButton
} from './styles'

interface CreateRequestPopupProps{
    reference:React.RefObject<HTMLDivElement>,
    appRef:React.RefObject<HTMLDivElement>
}

function hidePopup(refOfPopup:React.RefObject<HTMLDivElement>,refOfApp:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null || refOfApp.current == null) return;
    refOfPopup.current.style.display = 'none';
    refOfApp.current.style.opacity = '1';
}

const methods = [
    { name: 'Get', color:'#9583de' },
    { name: 'Post',color:'#74aa3a' },
    { name: 'Put',color:'#e69123' },
    { name: 'Delete',color:'#de5243' },
]

type RequestsAlreadyExists = Array<{ nameOfRequest:string, methodOfRequest:string }>;

export default function CreateRequestPopup(props : CreateRequestPopupProps){
    const [ nameOfRequest ,setNameOfRequest ] = useState('My Request');
    const [ methodOfRequest ,setMethodOfRequest ] = useState('GET');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        const requestsAlreadyExists = JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]');
        localStorage.setItem('insomnia_davidlpc1--requests',JSON.stringify([
            ...requestsAlreadyExists as RequestsAlreadyExists,
            { nameOfRequest, methodOfRequest }
        ]))

        hidePopup(props.reference,props.appRef)
    },[ nameOfRequest, methodOfRequest,props.reference,props.appRef])

    const handleNameChange = useCallback((event) => {
        setNameOfRequest(event.target.value)
    },[])

    const handleMethodChange = useCallback((event) => {
        setMethodOfRequest(event.target.value)
    },[])

    return(
        <CreateRequestContainer ref={props.reference} >
            <CreateRequestHeader>
                <span>New Request </span>
                <CreateRequestHeaderButton onClick={() => hidePopup(props.reference,props.appRef)}>
                    <CreateRequestHeaderIcon className="fas fa-times" />
                </CreateRequestHeaderButton>
            </CreateRequestHeader>
            <CreateRequestForm onSubmit={handleSubmit}>
                <CreateRequestLabel>Name
                    <span>(defaults to your request URL if left empty)</span>
                </CreateRequestLabel>
                <CreateRequestInputGroup>
                    <CreateRequestNameInput value={nameOfRequest} onChange={handleNameChange} type="text" name="request" placeholder="My Request" />
                    <select value={methodOfRequest} onChange={handleMethodChange}>
                        {
                            methods.map((method,index) => {
                                return index === 0 ? (
                                    <option  style={{color:method.color}} key={method.name} defaultValue={method.name}>{method.name}</option>
                                ) : (
                                    <option style={{color:method.color}} key={method.name} value={method.name}>{method.name}</option>
                                )
                            })
                        }    
                    </select>
                </CreateRequestInputGroup>
                <CreateRequestActionContainer>
                    <CreateRequestInfoAction>* Tip:paste Curl command into URL afterwards to import it</CreateRequestInfoAction>
                    <CreateRequestActionButton type="submit">Create</CreateRequestActionButton>
                </CreateRequestActionContainer>
            </CreateRequestForm>

        </CreateRequestContainer>
    )
}