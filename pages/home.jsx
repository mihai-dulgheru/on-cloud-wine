import { Layout, Logo } from '@/components';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/wine-bottles');
  const wineBottles = await res.json();
  return { props: { wineBottles } };
}

export default function Page({ wineBottles }) {
  return (
    <Layout title="Home">
      <div>
        <div className="flex items-center justify-center">
          <Logo width={192} height={192} className="w-auto cursor-pointer" />
        </div>
        <p className="text-xl font-medium">Suggestions for you</p>
        <div>
          {wineBottles.map((wineBottle) => (
            <d
              key={wineBottle.id}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-medium">{wineBottle.name}</p>
                <p className="text-sm">{wineBottle.description}</p>
              </div>
              <div>
                <p className="text-lg font-medium">{wineBottle.price}</p>
              </div>
            </d>
          ))}
        </div>
      </div>
    </Layout>
  );
}
