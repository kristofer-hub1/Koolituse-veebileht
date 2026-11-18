function CategoryList({ categories }) {
    return (
      <div className="category-list" role="group" aria-label="Koolituste kategooriad">
        {categories.map((category) => (
          <button key={category} type="button" className="category-pill">
            {category}
          </button>
        ))}
      </div>
    );
  }
  
  export default CategoryList;