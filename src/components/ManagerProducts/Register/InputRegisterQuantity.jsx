import { SelectBox, InputArea, Label } from "../StyleFormsProduct";

const InputRegisterQuantity = ({product, handleChange}) => {
    return (
        <div>
            <SelectBox>
                <Label>Quantidade:</Label>
            </SelectBox>
            <InputArea
                type="number"
                min={0}
                placeholder="0"
                value={product.quantity}
                onChange={(event) => handleChange('quantity', event.target.value)}
            />
        </div>
    );
}

export default InputRegisterQuantity;