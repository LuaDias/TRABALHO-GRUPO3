import { useEffect, useState } from "react";
import ItemCard from './ItemCard';
import './itemsCard.css';

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


// { display: 'grid', gridTemplateColumns: '1fr auto', placeItems: 'center', gap: '40px', padding: '120px' }
