import { PostProps } from "@/interfaces";
import Card from "./Card";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div> 
        <Card title={title} content={content} />
        <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
