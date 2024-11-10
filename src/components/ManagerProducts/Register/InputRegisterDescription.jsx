import { SelectBox, Label } from "../StyleFormsProduct";

const InputRegisterDescription = ({product, handleChange}) => {
    return (
        <div>
            <SelectBox>
                <Label>Descrição:</Label>
            </SelectBox>
            <textarea
                className="description"
                type="text"
                value={product.description}
                onChange={(event) => handleChange('description', event.target.value)}
            />
        </div>
    )
}

export default InputRegisterDescription;