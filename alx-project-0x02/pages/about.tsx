import Button from "@/components/common/Button";
import Layout from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 mt-10">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </Layout>
  );
}
