import { Layout, StarsRating, WineDetails } from "@/components";
import { Button } from "@/components/Fields";
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/wine-bottles/1');
  const wineBottle = await res.json();
  return { props: { wineBottle } };
}

export default function Page({wineBottle}) {
  console.log(wineBottle)

  const dummyWine =   {
    id: 1,
    name: 'Domaine de la Vallée',
    picture: 'domaine-de-la-vallee.png',
    description: 'Bordeaux Blend',
    classification: 'Red Bordeaux',
    type: 'Red',
    brand: 'Domaine de la Vallée',
    vintage: '2015',
    country: 'France',
    region: 'Bordeaux',
    grape: 'Merlot, Cabernet Sauvignon',
    volume: 0.75,
    condition: 'New',
    label: 'Excellent',
    drinkable: '2025',
    stock: 20,
    price: 29.99,
    rating: 4.7,
    reviews: 15,
    categories: ['Red', 'Bordeaux Blend', 'France', 'Family Event'],
    pitch: 'The 2021 Schloss Johannisberg Gelblack Riesling Trocken offers a clear, intense and quite complex, very elegant bouquet with flinty, leafy and nuanced ripe.'
  };

  const properties = ['classification', 'type', 'brand', 'vintage', 'country', 'region', 'grape', 'volume', 'condition', 'label', 'drinkable', 'stock']; 

  const handleClicked = (wine)=>{
    alert(`Vinul ${wine.name} a fost adaugat in coș`)
  }

  return (
    <Layout title="Search">
      <section className="flex flex-col">
        <div className="grid grid-cols-3 mt-8 auto-rows-min mb-20">
          <Image src={`/images/${dummyWine?.picture}`} alt="vin" width={400} height={400} className="-ml-16 row-span-3 col-span-2"/>
          <div className="flex flex-col">
            <h2 className="whitespace-nowrap text-[#A10028] font-bold text-2xl text-end -ml-40 -mt-1">Ocean Breeze Vineyards</h2>
            <p className="text-end italic text-[#A10028] font-semibold text-xl">{dummyWine?.price} lei</p>
            <span className="w-full justify-self-center -ml-24 mt-8 w-60">{dummyWine?.pitch}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 grid-rows-12 whitespace-nowrap"> 
            {properties.map(property=>{
              return <WineDetails key={property} property={property} propertyValue={dummyWine[property]}/>
            })}
          </div>


          <div className="flex gap-2 font-bold text-sm items-end">
            <StarsRating rating={dummyWine?.rating}/>
            <span>{`${dummyWine?.rating} - ${dummyWine?.reviews} reviews`}</span>
          </div>

          <Button 
            className="button full primary mx-auto rounded-3xl bg-[#A10028] px-20 py-4 text-lg font-semibold text-white" 
            onClick={() => handleClicked({
              id:dummyWine?.id,
              name:dummyWine?.name,
              price:dummyWine?.price,
              amount:1
          })}>
           ADD TO CART
          </Button>
        </div>
      </section>
    </Layout>
  );
}

