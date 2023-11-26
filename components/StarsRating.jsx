import Image from 'next/image';

const StarsRating = ({ rating }) => {
  const clampedRating = Math.min(5, Math.max(0, Math.round(rating)));
  const stars = Array.from({ length: 5 }, (_, index) => index < clampedRating);

  return (
    <div className="flex">
      {stars.map((isFilled, index) => (
        <Image
          key={index}
          src={isFilled ? '/icons/star-solid.svg' : '/icons/star-regular.svg'}
          alt={isFilled ? 'filled star' : 'empty star'}
          width={24}
          height={24}
        />
      ))}
    </div>
  );
};

export default StarsRating;
