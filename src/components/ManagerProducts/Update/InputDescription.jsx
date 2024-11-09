import { SelectBox, Label } from "../StyleFormsProduct";

const InputDescription = ({product, handleChange, edit}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <Label>Descrição:</Label>
                <input type="checkbox" onChange={() => toggleEdit('description')} />
                <span>( Editar descrição ? )</span>
            </SelectBox>
            <textarea
                className="description"
                type="text"
                disabled={!product.description.edit}
                value={product.description.value}
                onChange={(event) => handleChange('description', event.target.value)}
            />
        </div>
    )
}

export default InputDescription;