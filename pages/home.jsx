import { Layout, Logo, WineBottlesCategoryCard } from '@/components';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/wine-bottles-categories');
  const wineBottlesCategories = await res.json();
  return { props: { wineBottlesCategories } };
}

export default function Page({ wineBottlesCategories }) {
  return (
    <Layout title="Home">
      <div>
        <div className="flex items-center justify-center">
          <Logo width={192} height={192} className="w-auto" />
        </div>
        <p className="text-xl font-medium">Suggestions for you</p>
        <div className="mt-4 grid gap-6">
          {wineBottlesCategories.map((wineBottlesCategory) => (
            <WineBottlesCategoryCard
              key={wineBottlesCategory.id}
              wineBottlesCategory={wineBottlesCategory}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
