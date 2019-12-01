import styled from 'styled-components/native'

export const Loading = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-Items: center;
`;

export const Image = styled.Image`
    width: 70%;
    height: 70%
`;

export const ContainerImage = styled(Loading)`
    marginTop: 20
`;

export const TextInput = styled.TextInput`
    border-color: lightblue;
    border-bottom-width: 1px;
    border-style: solid;
    padding-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 15px;
    font-family: sans-serif-light;
    text-align: left
`;

export const But = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    padding-top: ${props => `${props.paddingTop}px`}
    margin-bottom: ${props => `${props.marginBottom}px`}
`;

export const ContainerButton = styled.View`
    margin-bottom: 40px
`;

export const Container = styled.View`
    background: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ContainerScroll = styled.ScrollView`
    background: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ContainerRegister = styled(Loading)`
`;

export const Text = styled.Text`
    font-size: 15px; 
    text-align: center;
    padding: 10px
`;

export const ContainerReg = styled(Loading)`
    align-content: center;
    background: #fff;
`;

export const TextRegister = styled.Text`
    font-size: 15px; 
    margin-left: 10px;
    margin-right: 10px
`;

export const TextInputRegister = styled.TextInput`
    border-color: black;
    border-bottom-width: 1px;
    font-size: 20px;
    padding-right: 5px;
    padding-left: 5px;
    text-align: center
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px
`;

export const ContainerText = styled(Loading)`
    margin-top: 50px
`;

export const Drop = styled.View`
    margin-left: 20px;
    margin-right: 20px
`;

export const ContainerBut = styled(Drop)`
    margin-top: 20px
`;

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