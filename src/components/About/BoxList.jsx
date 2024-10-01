import BoxItem from './BoxItem';
import { FaShoppingCart, FaUsers, FaDollarSign } from 'react-icons/fa';

const BoxList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <BoxItem
          icon={<FaShoppingCart size={30} />}
          number="10.5k"
          description="Sellers active in our site"
          colorClass=""
        />
        <BoxItem
          icon={<FaDollarSign size={30} />}
          number="33k"
          description="Monthly Product Sale"
          colorClass="bg-danger text-white"
        />
        <BoxItem
          icon={<FaUsers size={30} />}
          number="45.5k"
          description="Customer active in our site"
          colorClass=""
        />
                <BoxItem
          icon={<FaDollarSign size={30} />}
          number="25k"
          description="Anual grass sale in our site"
          colorClass=""
        />
      </div>
    </div>
  );
};

export default BoxList;
