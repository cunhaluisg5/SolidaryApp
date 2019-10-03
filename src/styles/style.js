import styled from 'styled-components/native'

export const View = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #FFF;

    padding-left: ${props => props.paddingLeft || 0};
    padding-right: ${props => props.paddingRight || 0};
    padding-top: ${props => props.paddingTop || 0};
    margin-bottom: ${props => props.marginBottom || 0};
    margin-top: ${props => props.marginTop || 0};
`;