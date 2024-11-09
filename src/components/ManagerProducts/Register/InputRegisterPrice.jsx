import { SelectBox } from "../StyleFormsProduct";
import CurrencyInput from "react-currency-input-field";

const InputRegisterPrice = ({ product, handleChange }) => {
    return (
        <div>
            <SelectBox>
                <label >Preço:</label>
            </SelectBox>
            <CurrencyInput
                className="currency-input"
                placeholder="R$ 0,00"
                value={product.price}
                decimalSeparator=","
                groupSeparator="."
                prefix="R$ "
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                decimalsLimit={2}
                onValueChange={(value) => {
                    const maxValue = 10000000;  // Define o limite máximo como 1.000.000,00
                    console.log(value)
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

export default InputRegisterPrice;