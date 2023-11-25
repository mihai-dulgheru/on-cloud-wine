import { useQuery } from '@tanstack/react-query';
import { WineBottleCard } from '.';

const WineBottleList = ({ search }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['wine-bottles', search],
    queryFn: () =>
      fetch(`/api/wine-bottles?search=${search}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid gap-4">
      {data.map((wineBottle) => (
        <WineBottleCard
          key={wineBottle.id}
          search={search}
          wineBottle={wineBottle}
        />
      ))}
    </div>
  );
};

export default WineBottleList;
