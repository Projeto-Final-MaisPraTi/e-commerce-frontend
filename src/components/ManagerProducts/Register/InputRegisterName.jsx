import { SelectBox, Label, Input, InputArea } from "../StyleFormsProduct";


const InputRegisterName = ({product, handleChange}) => {
    return (
        <Input>
            <SelectBox>
                <Label>Nome:</Label>
            </SelectBox>
            <InputArea type="text" onChange={(event) => handleChange('name', event.target.value)} />
        </Input>
    )
}

export default InputRegisterName;