import React from 'react';
import {
    CreateRequestContainer ,
    CreateRequestHeader,
    CreateRequestHeaderButton,
    CreateRequestHeaderIcon
} from './styles'

interface CreateRequestPopupProps{
    reference:React.RefObject<HTMLDivElement>
}

function hidePopup(refOfPopup:React.RefObject<HTMLDivElement>){
    if(refOfPopup.current == null) throw new Error('That popup is null')
    refOfPopup.current.style.display = 'none';
}

export default function CreateRequestPopup(props : CreateRequestPopupProps){
    return(
        <CreateRequestContainer ref={props.reference} >
            <CreateRequestHeader>
                <span>New Request </span>
                <CreateRequestHeaderButton onClick={() => hidePopup(props.reference)}>
                    <CreateRequestHeaderIcon className="fas fa-times" />
                </CreateRequestHeaderButton>
            </CreateRequestHeader>
        </CreateRequestContainer>
    )
}