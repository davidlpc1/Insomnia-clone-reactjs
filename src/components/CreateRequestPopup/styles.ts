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
    padding:20px;
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
    padding: 22px 0;
    margin-bottom:22px;
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
    padding:10px;
`;

export const CreateRequestActionContainer = styled('div')`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:68px;
    padding-top:20px;
    border-top:.1px dashed #aaaa;
`;

export const CreateRequestInfoAction = styled('span')`
    font-style:italic;
    font-size:10px;
    margin-left:10px;
`;

export const CreateRequestActionButton = styled('button')`
    background:transparent;
    height:100%;
    max-width:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:24px;
    border-radius:0 0 8px 0;
    &:hover {
        background:#aaa
    }
`;