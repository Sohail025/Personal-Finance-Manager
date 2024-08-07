import SingleItem from "./SingleItem";
export default function Item({ item }) {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 place-items-center mt-12 gap-6 sm:gap-9 mx-6 lg:mt-6">
      {item.map((sItem) => (
        <SingleItem singleItem={sItem} key={sItem.id} />
      ))}
    </div>
  );
}
