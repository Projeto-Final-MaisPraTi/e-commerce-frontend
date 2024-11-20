// src/components/BoxList/BoxList.jsx
import BoxItem from "./BoxItem.jsx";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";

const BoxList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <BoxItem
          icon={<FaShoppingCart size={30} />}
          number="+2K"
          description="Vendas por Dia"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaDollarSign size={30} />}
          number="+60K"
          description="Produtos Vendidos por Mês"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaUsers size={30} />}
          number="+3M"
          description="Clientes Ativos no Nosso Site"
          colorClass="bg-white" // Classe de background padrão (branco)
          iconColorClass="text-light-custom" // Classe para ícone branco
          textColorClass="text-dark-custom" // Classe para texto preto
        />
        <BoxItem
          icon={<FaDollarSign size={30} />}
          number="+720M"
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
