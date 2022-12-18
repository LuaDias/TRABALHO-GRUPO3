import Card from 'react-bootstrap/Card';
import './FuncItemCard.css';

function FuncItemCard({ imagem, nome, usuario, cpf, turno, funcao }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {usuario}
        </Card.Text>
        <Card.Text>
          {cpf}
        </Card.Text>
        <Card.Text>
          {turno}
        </Card.Text>
        <Card.Text>
          {funcao}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FuncItemCard;