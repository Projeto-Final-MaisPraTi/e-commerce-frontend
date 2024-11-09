import { SelectBox } from "../StyleFormsProduct";
import CurrencyInput from "react-currency-input-field";

const InputPrice = ({ product, edit, handleChange }) => {
    const toggleEdit = edit;
    return (
        <div>
            <SelectBox>
                <label >Preço:</label>
                <input type="checkbox" onChange={() => toggleEdit('price')} />
                <span>( Editar preço ? )</span>
            </SelectBox>
            <CurrencyInput
                className="currency-input"
                value={product.price.value}
                placeholder="R$ 0,00"
                decimalSeparator=","
                groupSeparator="."
                disabled={!product.price.edit}
                prefix="R$ "
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                decimalsLimit={2}
                onValueChange={(value) => {
                    const maxValue = 10000000;  // Define o limite máximo como 1.000.000,00
                    if (value === '' || !value) {
                        handleChange('price', value);
                        return;
                    }
                    if (parseFloat(value) <= maxValue) {
                        handleChange('price', value);
                    } else {
                        // Aqui você pode adicionar uma mensagem de erro ou simplesmente não atualizar o valor
                        console.log('Valor excede o limite permitido');
                    }
                }}
            />
        </div>
    );
}

export default InputPrice;