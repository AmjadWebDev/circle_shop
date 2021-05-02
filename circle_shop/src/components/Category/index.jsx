import React from 'react';

const Category = ({ category }) => {
  const colorSwitch = (x) => {
    switch (x) {
      case "men's clothing":
        return 'orange';
      case 'jewelery':
        return 'green';
      case 'electronics':
        return 'red';
      case "women's clothing":
        return 'gray';
      default:
        return 'white';
    }
  };

  return <span style={{ backgroundColor: colorSwitch(category), color:"white", padding:"6px", borderRadius:"25px" }}>{category}</span>;
};

export default Category;
