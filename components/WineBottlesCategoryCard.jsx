import Image from 'next/image';

const WineBottlesCategoryCard = ({ wineBottlesCategory }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-primary-500 px-6 py-8 shadow-lg">
      <div className="overflow-hidden rounded-xl bg-white py-4 shadow-md">
        <Image
          src={`/images/${wineBottlesCategory.image}`}
          alt={wineBottlesCategory.name}
          width={112}
          height={224}
          className="w-auto"
        />
      </div>
      <div className="flex-1 text-center text-xl font-medium text-white">
        <p>{wineBottlesCategory.name}</p>
      </div>
    </div>
  );
};

export default WineBottlesCategoryCard;
