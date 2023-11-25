import React from 'react';

const WineDetails = ({ property, propertyValue }) => {
  return (
    <>
      <div className="font-semibold uppercase">{property}</div>
      <div className="text-gray-400">{propertyValue}</div>
    </>
  );
};

export default WineDetails;
