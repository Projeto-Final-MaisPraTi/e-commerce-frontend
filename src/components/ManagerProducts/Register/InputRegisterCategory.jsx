import { SelectBox, Label } from "../StyleFormsProduct";
import { categories } from "../../../utils/ProductOptions";

const InputRegisterCategory = ({product, handleCategory}) => {
    return (
        <div>
            <SelectBox>
                <Label>Categoria:</Label>
            </SelectBox>
            <select onChange={handleCategory} value={product.category}>
                {categories.map((cat, index) => (
                    <option key={index} value={cat.value} disabled={cat.disabled}>
                        {cat.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputRegisterCategory;