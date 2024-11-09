import { SelectBox, Label, Input, InputArea } from "./StyleFormsProduct";


const InputName = ({product, edit, handleChange}) => {
    const toggleEdit = edit;
    return (
        <Input>
            <SelectBox>
                <Label>Nome:</Label>
                <input type="checkbox" onChange={() => toggleEdit('nome')} />
                <span>( Editar nome ? )</span>
            </SelectBox>
            <InputArea disabled={!product.nome.edit} type="text" value={product.nome.value} onChange={(event) => handleChange('nome', event.target.value)} />
        </Input>
    )
}

export default InputName;