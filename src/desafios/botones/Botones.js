import styled, {css} from 'styled-components'


const Boton = styled.button`
width: 81px;
height: 36px;
border-radius: 6px;
background-color: #E0E0E0;
box-shadow: 0px 2px 3px 0px #33333333;
border: none;
cursor: pointer;
    ${
        (props)=> props.outline && css`
            background-color: white;
            border: 1px solid #3D5AFE;
            color: #3D5AFE;     
        `
    }
     ${
        (props)=> props.text && css`
            background-color: white;
            box-shadow: none;
            color: #3D5AFE;     
        `
    }
    ${
        (props)=> props.disableShadow && css`
            background-color: #3D5AFE;
            color: white;
            box-shadow: none;
        `
    }
`
const BotonHover = styled(Boton)`
&:hover{
    background-color: #AEAEAE;
    box-shadow: 0px 2px 3px 0px #33333333;
    ${
        (props)=>props.outline && css`
            background-color: #2962FF10;
        `
    }
     ${
        (props)=>props.text && css`
            background-color: #2962FF10;
            box-shadow:none;
        `
    }
}
&:focus{
    background-color: #AEAEAE;
    border:none;
    ${
        (props)=>props.outline && css`
            background-color: #2962FF10;
            border: 1px solid #3D5AFE;
        `
    }
     ${
        (props)=>props.text && css`
            background-color: #2962FF10;
            box-shadow:none;
        `
    }
}

`
const BotonDisabled = styled(Boton)`
    background-color: white;
    box-shadow: none;
`
const BotonIconStart = styled(Boton)`
    background-color: #2962FF;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
`
const BotonIconEnd = styled(Boton)`
    background-color: #2962FF;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
`
const Button = styled.button`
    background-color: #2962FF;
    border:none;
    width: 81px;
    height: 36px;
    border-radius: 6px;
    color: white;
    box-shadow: 0px 2px 3px 0px #0031CA33;
    cursor: pointer;
  ${props => props.size === 'sm' && css`
        width: 73px;
        height: 32px;
  `}
  ${props => props.size === 'md' && css`
        width: 81px;
        height: 36px;
  `}
  ${props => props.size === 'lg' && css`
        width: 93px;
        height: 42px;
  `}
  ${props => props.color === 'default' && css`
        background-color: #E0E0E0;
        color: black;
        &:hover{
            background-color: #AEAEAE;
        }
  `}
  ${props => props.color === 'primary' && css`
        background-color: #2962FF;
        color: white;
        &:hover{
            background-color: #0039CB;
        }
  `}
  ${props => props.color === 'secondary' && css`
        background-color: #455A64;
        color: white;
        &:hover{
            background-color: #1C313A;
        }
  `}
  ${props => props.color === 'danger' && css`
        background-color: #D32F2F;
        color: white;
        &:hover{
            background-color: #9A0007;
        }
  `}
  
`

export {Boton, BotonHover, BotonDisabled, BotonIconStart, BotonIconEnd, Button}; 