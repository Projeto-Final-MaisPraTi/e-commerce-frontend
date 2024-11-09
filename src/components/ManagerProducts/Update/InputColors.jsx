import { SelectBox, OptionColors, SelectColor } from "../StyleFormsProduct";
import { opcoesDeCores } from "../../../utils/ProductOptions";

const InputColors = ({product, edit, corSelect, handleChange}) => {
    const toggleEdit = edit;
    return (
    <OptionColors>
        <SelectBox>
            <label>Cor:</label>
            <input type="checkbox" onChange={() => toggleEdit('color')} />
            <span>( Editar cor ? )</span>
        </SelectBox>
        <SelectColor>
            <select disabled={!product.color.edit} value={corSelect} onChange={handleChange}>
                {opcoesDeCores.map((opcao, index) => (
                    <option key={index} value={opcao.valor}>
                        {opcao.nome}
                    </option>
                ))}
            </select>
            <span
                style={{
                    border: "2px solid black",
                    borderRadius: "5px",
                    padding: "15px",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    backgroundColor: corSelect,
                }}
            ></span>
        </SelectColor>
    </OptionColors>
    );
}

export default InputColors;