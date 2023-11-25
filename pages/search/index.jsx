import { Layout, SearchInput, WineBottleList } from '@/components';
import { useState } from 'react';

export default function Page() {
  const [search, setSearch] = useState('');

  return (
    <Layout title="Search">
      <div>
        <div className="p-4">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <WineBottleList search={search} />
      </div>
    </Layout>
  );
}
