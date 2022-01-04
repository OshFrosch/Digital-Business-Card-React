import ProfilePicture from "./ProfilePicture";
import Profile from "./Profile";
import Links from "./Links";

function BusinessCard() {
  return (
    <div className="business-card">
      <ProfilePicture />
      <Profile />
      <Links />
    </div>
  );
}

export default BusinessCard;
