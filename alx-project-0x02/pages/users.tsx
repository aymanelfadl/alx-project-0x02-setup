import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Layout from "@/components/layout/Layout";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <Layout>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
                <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
                />
            ))}
        </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
};
