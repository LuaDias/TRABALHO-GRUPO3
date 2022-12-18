import Card from 'react-bootstrap/Card';
import './FuncItemCard.css';

function FuncItemCard({ imagem, nome, usuario, cpf, turno, funcao }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>Usuario:
          {' ' + usuario}
        </Card.Text>
        <Card.Text>CPF:
          {' ' + cpf}
        </Card.Text>
        <Card.Text>Turno:
          {' ' + turno}
        </Card.Text>
        <Card.Text>Função:
          {' ' + funcao}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FuncItemCard;
