// src/components/BoxList/BoxList.jsx
import BoxItem from "./BoxItem.jsx";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";

const BoxList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <BoxItem
          icon={<FaShoppingCart size={30} />}
          number="10.5k"
          description="Vendedores ativos no nosso site"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaDollarSign size={30} />}
          number="33k"
          description="Vendas de Produtos Mensais"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaUsers size={30} />}
          number="45.5k"
          description="Clientes ativos no nosso site"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaDollarSign size={30} />}
          number="25k"
          description="Vendas Brutas Anuais no nosso site"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
      </div>
    </div>
  );
};

export default BoxList;
