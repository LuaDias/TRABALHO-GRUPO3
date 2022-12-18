import Card from 'react-bootstrap/Card';
import './ItemsCard.css';

function ItemCard({ imagem, nome, email, data }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Card.Text>
          {data}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
