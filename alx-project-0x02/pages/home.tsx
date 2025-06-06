import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

export default function HomePage() {

  const [cards, setCards] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setCards([...cards, newPost]);
  };

  return (
    <Layout>
        <div className="justify-end flex p-2">
         <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 justify-end py-2 border-r-2 bg-gray-100 text-gray-700 cursor-pointer rounded-xl hover:bg-gray-200 transition"
        >
          Add New Post
        </button>

        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
        <div className="grid grid-cols-4 gap-4 ">
            {cards.length !== 0 ? (
                cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} />
               ))) 
                : 
                (<p className="self-center text-gray-400">No posts yet.</p>)}
        </div>
    </Layout>
  );
}
