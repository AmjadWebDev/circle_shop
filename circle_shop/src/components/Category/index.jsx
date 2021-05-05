import React from 'react';


// component to change the background color of the tag category

const Category = ({ category }) => {
  const colorSwitch = (x) => {
    switch (x) {
      case "men's clothing":
        return '#ffa03b';
      case 'jewelery':
        return '#1cc93e';
      case 'electronics':
        return '#f03c42';
      case "women's clothing":
        return '#1089e6';
      default:
        return 'gray';
    }
  };

  return <span style={{ backgroundColor: colorSwitch(category), color:"white", padding:"6px", borderRadius:"25px" }}>{category}</span>;
};

export default Category;
