
import { Button, Card } from 'react-bootstrap';


// , data, hora, assunto, mensagem
function CardMensagem(index, remetente, data , hora, assunto, mensagem) {
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{remetente}  </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data} {hora}</Card.Subtitle>
                    <Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">{assunto}</Card.Subtitle> 
                        <Card.Text>
                            {mensagem}
                        </Card.Text>
                         <Button id={`btn-${index}`} type="submit" variant="outline-secondary">Excluir</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardMensagem;