import { Layout } from '@/components';

export async function getServerSideProps() {
  // TODO
  return { props: {} };
}

export default function Page({ users }) {
  return (
    <Layout title="Cart">
      <div>Cart</div>
    </Layout>
  );
}
