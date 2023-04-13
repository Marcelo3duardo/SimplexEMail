

import "./styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { Form, Button, Card } from 'react-bootstrap';


function User() {

    window.onload = IniciarFuncoes;
    const [tabelaMensSend, setTabelaMensSend] = useState([])
    const [tabelaMensRecv, setTabelaMensRecv] = useState([])



    //let mensagemEnviadas = GetEmails();
    //const MensagensRecebidas = getEmailsRecv();

    function IniciarFuncoes() {
        GetEmails();
        getEmailsRecv();
    }




    function deleteEmail(indexAux) {


        var DeleteA = 'http://localhost:8000/emails/';
        // var DeleteB = localStorage.userName;
        var DeleteC = DeleteA.concat(indexAux);
        console.log(DeleteC);

        fetch(DeleteC, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json; charset=UTF-8'
            }
            // headers: {
            //     'Content-type' : 'text/plain'
            //   }
        })
            .then(response => {
                if (response.ok) {
                    console.log('Exclusão realizada com sucesso!');
                } else {
                    console.error('Erro ao excluir:', response.status);
                }
            })
            .catch(error => {
                console.error('Erro ao excluir:', error);
            });
    }



    function GetEmails() {


        var a = 'http://localhost:8000/emails/';
        var b = localStorage.userName;
        var c = a.concat(b)



        console.log(c)
        fetch(c)
            .then(response => response.json())

            .then(data => {

                // setTabelaMensRecv((tabelaMensRecv) => [ ...tabelaMensRecv,data ])

                data.map((destinatario) => {
                    setTabelaMensSend((tabelaMensSend) => [...tabelaMensSend, destinatario])
                })




            })
            .catch(error => {

                console.error('Error:', error);
                //return null;
            });



    }



    function getEmailsRecv() {

        var a = 'http://localhost:8000/emailsRecv/';
        var b = localStorage.userName;
        var c = a.concat(b)
        console.log(c)
        fetch(c)
            .then(response => response.json())

            .then(data => {
                data.map((user) => {
                    setTabelaMensRecv((tabelaMensRecv) => [...tabelaMensRecv, user])
                })

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    function ConsoleLogArray() {
        console.log("teste 02 ####")
        console.log(tabelaMensRecv)
    }

    function pushEmail() {
        let remetente = localStorage.userName;
        var destinatarioVar = document.getElementById("DestinatarioAEnviar").value;
        var assuntoVar = document.getElementById("AssuntoAEnviar").value;
        var mensagemVar = document.getElementById("MensagemAEnviar").value;

        const dataHoraAtual = new Date();

        // Obtém os valores da data e hora
        const dia = dataHoraAtual.getDate();
        const mes = dataHoraAtual.getMonth() + 1; // Os meses começam com 0
        const ano = dataHoraAtual.getFullYear();
        const hora = dataHoraAtual.getHours();
        const minuto = dataHoraAtual.getMinutes();
        const segundo = dataHoraAtual.getSeconds();

        // Formata a data e hora em uma string
        const formtdata = `${dia}/${mes}/${ano} `;
        const formthora = `${hora}:${minuto}:${segundo}`;



        fetch("http://localhost:8000/recvEmails", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "remetente": `${remetente}`,
                "destinatario": `${destinatarioVar}`,
                "data": `${formtdata}`,
                "hora": `${formthora}`,
                "assunto": `${assuntoVar}`,
                "mensagem": `${mensagemVar}`
            })
        })

            .then(response => {
                console.log(response);
                if (response) {
                    console.log("Item adicionado com sucesso");
                } else {
                    console.error("Erro ao adicionar item");
                }
            })
            .catch(error => console.error(error));
        window.location.reload();
    }

    return (
        <div className="allBack">

            <div id="EnviarMensagem">
                <div className='container_h1'>
                    <h1>{localStorage.userName}</h1>
                </div>

                <div className="container">


                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="DestinatarioAEnviar" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control id="AssuntoAEnviar" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control id="MensagemAEnviar" as="textarea" rows={3} />
                        </Form.Group>
                        <Button as="input" type="submit" onClick={pushEmail} value="Enviar" />{' '}
                    </Form>


                </div>
            </div>


            <div id="box2">
                <div className="box3" id="mensagensList">

                    <div>
                        <p>Emails Enviados</p>
                        <div className="MenuNavegação">
                            {/* <button className="testUseState" type="button" onClick={ConsoleLogArray}>Teste</button> */}

                            {tabelaMensSend.map((user) => (

                                <div className="boxMensagemSend" key={user.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title> Destinatario :  {user.destinatario}  </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{user.data} {user.hora}</Card.Subtitle>
                                            <Card.Text>
                                                <Card.Subtitle className="mb-2 text-muted">{user.assunto}</Card.Subtitle>
                                                <Card.Text>
                                                    {user.mensagem}
                                                </Card.Text>
                                                <Button id={`btn-${user.index}`} type="submit" variant="outline-danger">Excluir</Button>{' '}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="box3" id="LisMensRecv">
                    <p>Emails Recebidos</p>
                    <div className="MenuNavegaçãoRecebidos">
                        {tabelaMensRecv.map((user) => (

                            <div className="boxMensagemRecv" key={user.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Remetente : {user.remetente}  </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{user.data} {user.hora}</Card.Subtitle>
                                        <Card.Text>
                                            <Card.Subtitle className="mb-2 text-muted">{user.assunto}</Card.Subtitle>
                                            <Card.Text>
                                                {user.mensagem}
                                            </Card.Text>
                                            <Button id={`btn-${user.index}`} type="submit" variant="outline-danger">Excluir</Button>{' '}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default User;