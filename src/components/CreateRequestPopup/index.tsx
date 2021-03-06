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
import { methods } from '../../methods';
import { useHistory } from 'react-router-dom';
interface CreateRequestPopupProps{
    reference:React.RefObject<HTMLDivElement>,
    appRef:React.RefObject<HTMLDivElement>
}

function hidePopup(refOfPopup:React.RefObject<HTMLDivElement>,refOfApp:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null || refOfApp.current == null) return;
    refOfPopup.current.style.display = 'none';
    refOfApp.current.style.opacity = '1';
}

type RequestsAlreadyExists = Array<{ nameOfRequest:string, methodOfRequest:string }>;

export default function CreateRequestPopup(props : CreateRequestPopupProps){
    const [ nameOfRequest ,setNameOfRequest ] = useState('My Request');
    const [ methodOfRequest ,setMethodOfRequest ] = useState('Get');
    const history = useHistory()

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        const requestsAlreadyExists = JSON.parse(localStorage.getItem('insomnia_davidlpc1--requests') || '[]');
        localStorage.setItem('insomnia_davidlpc1--requests',JSON.stringify([
            ...requestsAlreadyExists as RequestsAlreadyExists,
            { nameOfRequest, methodOfRequest,urlOfRequest:'' }
        ]))

        hidePopup(props.reference,props.appRef)
        history.push('/')
    },[ nameOfRequest, methodOfRequest,props.reference,props.appRef, history])

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