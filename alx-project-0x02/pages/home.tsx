import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <Layout>
      <div className=" mt-1 grid grid-cols-4 gap-3">
        <Card 
          title="Card 1" 
          content="This is the content of the first card." 
        />
        <Card 
          title="Card 2" 
          content="Second card with different content." 
        />
        <Card 
          title="Card 3" 
          content="Here is a third card, also reusable!" 
        />
      </div>
    </Layout>
  );
}
