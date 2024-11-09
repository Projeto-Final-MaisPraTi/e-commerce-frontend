import { SelectBox, Label } from "../StyleFormsProduct";
import { categories } from "../../../utils/ProductOptions";

const InputCategory = ({product, edit, handleCategory}) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <Label>Categoria:</Label>
                <input type="checkbox" onChange={() => toggleEdit('category')} />
                <span>( Editar categoria ? )</span>
            </SelectBox>
            <select disabled={!product.category.edit} onChange={handleCategory} value={product.category.value}>
                {categories.map((cat, index) => (
                    <option key={index} value={cat.value} disabled={cat.disabled}>
                        {cat.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputCategory;