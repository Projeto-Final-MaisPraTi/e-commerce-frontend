import { SelectBox, Label, Input, InputArea } from "../StyleFormsProduct";


const InputName = ({product, edit, handleChange}) => {
    const toggleEdit = edit;
    return (
        <Input>
            <SelectBox>
                <Label>Nome:</Label>
                <input type="checkbox" onChange={() => toggleEdit('name')} />
                <span>( Editar nome ? )</span>
            </SelectBox>
            <InputArea disabled={!product.name.edit} type="text" value={product.name.value} onChange={(event) => handleChange('name', event.target.value)} />
        </Input>
    )
}

export default InputName;