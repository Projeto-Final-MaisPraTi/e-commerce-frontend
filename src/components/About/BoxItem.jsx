const BoxItem = ({ icon, number, description, colorClass }) => {
  return (
    <div className={`col-md-3 text-center my-3`}>
      <div className={`p-4 border rounded shadow-sm ${colorClass}`}>
        <div className="icon mb-2">{icon}</div>
        <h4>{number}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BoxItem;
