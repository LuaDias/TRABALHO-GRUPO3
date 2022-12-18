import Card from 'react-bootstrap/Card';
import './QuaItemsCard.css';

function ItemCard({ imagem, nome, descricao }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {descricao}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;