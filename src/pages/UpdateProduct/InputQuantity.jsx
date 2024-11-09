import { SelectBox, InputArea, Label } from "./StyleFormsProduct";

const InputQuantity = ({product, edit, handleChange}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <Label>Quantidade:</Label>
                <input type="checkbox" onChange={() => toggleEdit('estoque')} />
                <span>( Editar quantidade ? )</span>
            </SelectBox>
            <InputArea
                type="number"
                min={0}
                disabled={!product.estoque.edit}
                placeholder="0"
                value={product.estoque.value}
                onChange={(event) => handleChange('estoque', event.target.value)}
            />
        </div>
    );
}

export default InputQuantity;