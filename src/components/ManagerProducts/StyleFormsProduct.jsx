import styled from "styled-components"

export const Input = styled.div`
    
`

export const InputArea = styled.input`
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
`

export const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px auto 5px auto;
    div {
            display: flex;
            align-items: center;
    }
    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 0px;
    }
    input {
        margin-left: 10px;
        width: 18px;
        height: 18px;
        padding: 0;
    }
    span {
        color: gray;
        font-size: 15px;
        margin-left: 5px;
    }
    @media screen and (max-width: 380px){
        label {
            font-size: 13px;
        }
    }
    @media screen and (max-width: 550px){
        width: 95%;
        label {
            font-size: 16px;
        }
        span {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 1200px){
        label {
            font-size: 16px;
        }
        span {
            font-size: 11px;
        }
    }
`

export const Label = styled.label`
    
`

export const OptionColors = styled.div`
    
`

export const SelectColor = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`

export const ImageCover = styled.div`
    display: flex;
    height: 320px;
    width: 300px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    margin: auto;
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`

export const UploadFile = styled.div`
    
`

export const ContainerAddImage = styled.div`
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    width: 200px;
    height: 250px;
    border-radius: 5px;
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUpDeleteImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    width: 350px;
    height: 150px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    p{
        font-weight: 400;

    }
    p span {
    color: #a00606;
    font-weight: 700;
    font-size: 15px;
}
`

export const ButtonsDeleteImage = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;
  button {
    padding: 5px 20px 5px 20px;
    border: none;
    border-radius: 5px;
  }
  .yes {
    background-color: #0765bd;
    color: white
  }
  .no {
    background-color: #e02108;
    color: white;
  }
`
export const ImageDetails = styled.div`
    display: flex;
    height: 300px;
    width: 100%;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: auto;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 10px;
    @media screen and (max-width: 500px){
        width: 95%;
    }
`