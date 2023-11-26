import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const fullStar = (
  <svg
    className="ms-2 h-6 w-6 text-yellow-300"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);
const emptyStar = (
  <svg
    className="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const WineBottleCard = ({ search, wineBottle }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/search/${wineBottle.id}`);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`/api/wine-bottles/${wineBottle.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFavorite: !wineBottle.isFavorite }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wine-bottles', search] });
      toast.success(
        `Wine bottle ${wineBottle.name} ${
          wineBottle.isFavorite ? 'removed from' : 'added to'
        } favorites`
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleAddToFavorites = (e) => {
    e.stopPropagation();
    return mutation.mutateAsync();
  };

  return (
    <div
      className="flex flex-row items-center justify-between rounded-2xl bg-white p-4 pl-0 shadow-lg"
      onClick={handleClick}
    >
      <div className="flex h-full flex-row items-start justify-start">
        <Image
          src={`/images/${wineBottle.picture}`}
          alt={wineBottle.name}
          width={112}
          height={112}
        />
        <div className="flex h-full flex-col items-start justify-start gap-2 py-4">
          <h2 className="text-xl font-semibold text-secondary-500">
            {wineBottle.name}
          </h2>
          <p className="text-gray-500">{wineBottle.description}</p>
        </div>
      </div>
      <div className="flex h-full flex-row items-start justify-center pt-4">
        <button
          disabled={mutation.isLoading}
          onClick={handleAddToFavorites}
          type="button"
        >
          {wineBottle.isFavorite ? fullStar : emptyStar}
        </button>
      </div>
    </div>
  );
};

export default WineBottleCard;
