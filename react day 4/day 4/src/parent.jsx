import React from 'react';
import Child from './child';

const Parent = () => {
  const name = "Harry";
  const property = "Miami Metro";

  return (
    <>
      <h1>Parent Component</h1>
      <p>{name}</p>

      <Child property={property} />
    </>
  );
};

export default Parent;





















