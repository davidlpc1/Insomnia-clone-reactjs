import styled from 'styled-components'

export const CreateRequestContainer = styled('div')`
    height:200px;
    width:calc(100% - 400px);
    right:200px;
    left:200px;
    top:30px;
    background-color:var(--white-color);
    position:absolute;
    bottom:calc(100vh - 200px);
    box-shadow:1px 1px 10px #111;
    border-radius:8px;
    z-index:9999;
    display:none;
    transition:200ms ease-in-out;
`;

export const CreateRequestHeader = styled('div')`
    display:flex;
    height:40px;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    border-bottom:.1px dashed #aaaa;
`;

export const CreateRequestHeaderButton= styled('button')`
    background:transparent;
    cursor:pointer;
`;

export const CreateRequestHeaderIcon = styled('i')`
    pointer-events:none;
`;

export const CreateRequestForm = styled('form')`
    border-bottom:.1px dashed #aaaa;
    margin: 15px 0;
`;
export const CreateRequestLabel = styled('label')`
    font-size:13px;
    color:var(--black-color);
    margin-left:10px;
    margin-top:10px;
    span{
        color:#aaa;
        font-style:italic;
    }
`;
export const CreateRequestInputGroup = styled('div')`
    display:flex;
    padding:5px 10px;
    justify-content:space-between;
    align-items:center;
`;
export const CreateRequestNameInput = styled('input')`
    border: .5px solid #aaa1;
    padding:10px
`;
export const CreateRequestMethodSelect = styled('select')``;