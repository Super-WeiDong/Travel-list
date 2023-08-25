export default function Stats({ items }) {
  const itemNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNum / itemNum) * 100);

  console.log("item =" + itemNum);
  console.log("packed =" + packedNum);
  console.log("percentage =" + percentage);
  if (itemNum === 0)
    return (
      <footer className="stats">
        <em>Start adding some items for your Trip 😍 </em>
      </footer>
    );

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You are all set 😍 </em>
      ) : (
        <em>
          🧳 You have {itemNum} item on your list, and you already packed{" "}
          {packedNum} ({percentage}%){" "}
        </em>
      )}
    </footer>
  );
}
