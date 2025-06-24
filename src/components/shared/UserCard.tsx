import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { FaCoins } from 'react-icons/fa'; 
import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {

  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
<img
  src={
    user.imageId
      ? `https://cloud.appwrite.io/v1/storage/buckets/6782e52f0035d9eb5fc4/files/${user.imageId}/view?project=6782604b00207ffe0075`
      : "/assets/icons/profile-placeholder.svg"
  }
  alt="creator"
  className="rounded-full w-14 h-14"
  onError={(e) => {
    e.currentTarget.src = "/assets/icons/profile-placeholder.svg";
  }}
/>


      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <FaCoins style={{ color: 'gold', marginRight: '5px' }} />
  {user.score}
</p>

      </div>


    </Link>
  );
};

export default UserCard;