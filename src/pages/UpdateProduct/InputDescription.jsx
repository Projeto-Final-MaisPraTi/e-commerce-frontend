import { SelectBox, Label } from "./StyleFormsProduct";

const InputDescription = ({product, handleChange, edit}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <Label>Descrição:</Label>
                <input type="checkbox" onChange={() => toggleEdit('descricao')} />
                <span>( Editar descrição ? )</span>
            </SelectBox>
            <textarea
                className="description"
                type="text"
                disabled={!product.descricao.edit}
                value={product.descricao.value}
                onChange={(event) => handleChange('descricao', event.target.value)}
            />
        </div>
    )
}

export default InputDescription;