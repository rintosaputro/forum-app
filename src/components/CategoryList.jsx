import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonCategory from './ButtonCategory';

function CategoryList({ categories, onCategory }) {
  const [activeBtn, setActiveBtn] = useState('');

  const handleCategory = (category) => {
    onCategory({ category, isActive: activeBtn === category });
    if (category === activeBtn) {
      setActiveBtn('');
    } else {
      setActiveBtn(category);
    }
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <ButtonCategory
          key={category}
          onCategory={() => handleCategory(category)}
          isActive={category === activeBtn}
        >
          {category}
        </ButtonCategory>
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategory: PropTypes.func.isRequired,
};

export default CategoryList;
