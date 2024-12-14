const Item = ({ item }) => {
  const { name, price } = item.info;

  return (
    <div className="item-header">
      <div>
        {name}
        {price}
      </div>

      <button>Add</button>
    </div>
  );
};

export default Item;
