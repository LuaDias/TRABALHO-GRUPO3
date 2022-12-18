import { useEffect, useState } from "react";
import ItemCard from './QuaItemCard';
import './QuaItemsCard.css';

function ItemsCard({ lista }) {
  let [lista2, setLista2] = useState([]);

  useEffect(() => {
    setLista2(lista);
  }, [lista])

  return (
    <div className="ItemsCard">
      {lista2.map((elemento, indice) => {
        return <ItemCard key={indice} {...elemento} />
      })}
    </div>
  );
}

export default ItemsCard;
