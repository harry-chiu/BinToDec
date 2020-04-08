import styled from 'styled-components';

export default styled.input`
    border: 1px solid #dddddd;
    padding: 8px;
    min-width: 240px;

    &:disabled {
        background: #dddddd;
        box-shodow: none;
    }
`;