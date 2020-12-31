import React from 'react';
import {
    CreateRequestContainer ,
    CreateRequestHeader,
    CreateRequestHeaderButton,
    CreateRequestHeaderIcon,
    CreateRequestForm,
    CreateRequestLabel,
    CreateRequestInputGroup,
    CreateRequestNameInput,
    CreateRequestMethodSelect
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

export default function CreateRequestPopup(props : CreateRequestPopupProps){
    
    return(
        <CreateRequestContainer ref={props.reference} >
            <CreateRequestHeader>
                <span>New Request </span>
                <CreateRequestHeaderButton onClick={() => hidePopup(props.reference,props.appRef)}>
                    <CreateRequestHeaderIcon className="fas fa-times" />
                </CreateRequestHeaderButton>
            </CreateRequestHeader>
            <CreateRequestForm>
                <CreateRequestLabel>Name
                    <span>(defaults to your request URL if left empty)</span>
                </CreateRequestLabel>
                <CreateRequestInputGroup>
                    <CreateRequestNameInput type="text" name="request" placeholder="My Request" />
                    <CreateRequestMethodSelect>
                        {
                            methods.map((method,index) => {
                                return index === 0 ? (
                                    <option  style={{color:method.color}} key={method.name} value={method.name} selected>{method.name}</option>
                                ) : (
                                    <option style={{color:method.color}} key={method.name} value={method.name}>{method.name}</option>
                                )
                            })
                        }    
                    </CreateRequestMethodSelect>
                </CreateRequestInputGroup>
                
            </CreateRequestForm>
        </CreateRequestContainer>
    )
}