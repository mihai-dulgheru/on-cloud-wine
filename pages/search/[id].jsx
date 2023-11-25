import { Layout, StarsRating, WineDetails } from '@/components';
import { Button } from '@/components/Fields';
import Image from 'next/image';
import { Cart } from '@/data';
import toast from 'react-hot-toast';

export async function getServerSideProps({ query }) {
  const { id } = query;
  if (!id) {
    return {
      notFound: true,
    };
  }
  try {
    const res = await fetch(`http://localhost:3000/api/wine-bottles/${id}`);
    const wineBottle = await res.json();
    return { props: { wineBottle } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Page({ wineBottle }) {
  const properties = [
    'classification',
    'type',
    'brand',
    'vintage',
    'country',
    'region',
    'grape',
    'volume',
    'condition',
    'label',
    'drinkable',
    'stock',
  ];

  const handleClicked = (wine) => {
    const foundItem = Cart.items.find((item) => item.id === wine.id);

    foundItem
      ? (foundItem.quantity += 1) && toast.success('Quantity updated: +1')
      : Cart.items.push({ ...wine, amount: 1 }) &&
        toast.success('Wine added to cart 🛒');
  };

  return (
    <Layout title="Search">
      <section className="flex flex-col">
        <div className="mb-20 mt-8 grid auto-rows-min grid-cols-3">
          <Image
            src={`/images/${wineBottle?.picture}`}
            alt="vin"
            width={400}
            height={400}
            className="col-span-2 row-span-3 -ml-16"
          />
          <div className="flex flex-col">
            <h2 className="-ml-40 -mt-1 whitespace-nowrap text-end text-2xl font-bold text-secondary-500">
              {wineBottle?.name}
            </h2>
            <p className="text-end text-xl font-semibold italic text-secondary-500">
              {wineBottle?.price} lei
            </p>
            <span className="-ml-24 mt-8 w-60 justify-self-center">
              {wineBottle?.pitch}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid-rows-12 grid grid-cols-2 whitespace-nowrap">
            {properties.map((property) => {
              return (
                <WineDetails
                  key={property}
                  property={property}
                  propertyValue={wineBottle[property]}
                />
              );
            })}
          </div>

          <div className="flex items-end gap-2 text-sm font-bold">
            <StarsRating rating={wineBottle?.rating} />
            <span>{`${wineBottle?.rating} - ${wineBottle?.reviews} reviews`}</span>
          </div>

          <Button
            className="button full primary mx-auto rounded-3xl bg-secondary-500 px-20 py-4 text-lg font-semibold text-white"
            onClick={() =>
              handleClicked({
                id: wineBottle?.id,
                name: wineBottle?.name,
                picture: wineBottle?.picture,
                price: wineBottle?.price,
              })
            }
          >
            ADD TO CART
          </Button>
        </div>
      </section>
    </Layout>
  );
}
