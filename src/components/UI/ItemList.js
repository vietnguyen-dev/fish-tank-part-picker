import ItemListing from "./ItemListing"

const ItemList = ({items}) => {
    return (
      <>
        <ul className="item-description">
          <li>Image</li>
          <li>Name</li>
          <li>Price</li>
          <li>Dimensions</li>
          <li>Rating</li>
        </ul>
        {items.map((item) => (
          <ItemListing
            key={item.id}
            name={item.name}
            price={item.price}
            dimensions={item.dimensions}
            img={item.img}
            rating={item.rating}
          />
        ))}
      </>
    );
}

export default ItemList
