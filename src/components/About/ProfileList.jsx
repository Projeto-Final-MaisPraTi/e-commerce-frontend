import ProfileItem from './ProfileItem';
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

const ProfileList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <ProfileItem
          image={profile1}
          name="Tom Cruise"
          title="Founder & Chairman"
        />
        <ProfileItem
          image={profile2}
          name="Emma Watson"
          title="Managing Director"
        />
        <ProfileItem
          image={profile3}
          name="Will Smith"
          title="Product Designer"
        />
      </div>
    </div>
  );
};

export default ProfileList;
