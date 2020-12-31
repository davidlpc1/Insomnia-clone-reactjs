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

