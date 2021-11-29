import Layout from '../UI/Layout'
import ItemList from '../UI/ItemList'
import ItemFilter from '../UI/ItemFilter'

let items = [
  {
    id: 0,
    name: "10 Gallon Tank",
    price: 10.99,
    rating: "⭐⭐⭐⭐",
    dimensions: "10 x 8 x 20",
    img: "fish-3-32.png",
  },
  {
    id: 1,
    name: "5 Gallon Tank",
    price: 6.99,
    rating: "⭐⭐⭐⭐⭐",
    dimensions: "5 x 4 x 10",
    img: "fish-3-32.png",
  },
  {
    id: 2,
    name: "Pagoda",
    price: 8.99,
    rating: "⭐⭐⭐",
    dimensions: "3 x 4 x 10",
    img: "fish-3-32.png",
  },
];

const Browse = () => {
    return (
      <Layout layoutClass={`items-page`}>
        <ItemFilter />
        <div>
          <h2>Browse Products</h2>
          <ItemList items={items}/>
        </div>
      </Layout>
    );
}

export default Browse
