import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 border-r-2 border-t-2  rounded-xl border-gray-300 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
