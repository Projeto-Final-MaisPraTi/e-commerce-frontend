import { SelectBox, InputArea, Label } from "../StyleFormsProduct";

const InputQuantity = ({product, edit, handleChange}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <Label>Quantidade:</Label>
                <input type="checkbox" onChange={() => toggleEdit('stock')} />
                <span>( Editar quantidade ? )</span>
            </SelectBox>
            <InputArea
                type="number"
                min={0}
                disabled={!product.stock.edit}
                placeholder="0"
                value={product.stock.value}
                onChange={(event) => handleChange('stock', event.target.value)}
            />
        </div>
    );
}

export default InputQuantity;