import { Layout } from '@/components';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  return { props: { users } };
}

export default function Page({ users }) {
  return (
    <Layout title="Login">
      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
    </Layout>
  );
}
