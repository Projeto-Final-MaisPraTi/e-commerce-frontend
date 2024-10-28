import "./BoxItem.css"; // Importando CSS personalizado

const BoxItem = ({ icon, number, description, colorClass, iconColorClass, textColorClass }) => {
  return (
    <div className="col-md-3 d-flex">
      <div className={`p-4 border rounded shadow-sm box-item flex-fill ${colorClass}`}>
        <div className="icon-container mb-3">
          {/* Círculo Maior */}
          <div className="circle large-circle"></div>
          {/* Círculo Menor */}
          <div className="circle small-circle"></div>
          {/* Ícone */}
          <div className={`icon ${iconColorClass}`}>{icon}</div>
        </div>
        <h4 className={textColorClass}>{number}</h4>
        <p className="{textColorClass} text-center">{description}</p>
      </div>
    </div>
  );
};

export default BoxItem;
