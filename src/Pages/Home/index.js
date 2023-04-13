import { Link } from "react-router-dom";
import "./styles.scss"
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    

    function Logar() {
        localStorage.userName = document.getElementById("inputUser").value;
        /* document.getElementById("inputUser").value = localStorage.userName */

    }

    function Carregar() {
        if (localStorage.userName) {
            document.getElementById("inputUser").value = localStorage.userName
        }
    }



    return (
        <div className="menuInicio">
            <div className="box">
                <h1>Digitar UserName</h1>
                <input type="text" id="inputUser" />
                <Link to='/User' className="btn1">
                    {/* <Button as="input" type="button" id="save-button" onClick={Logar}> entrar </Button> */}
                    <Button as="input" type="button"  value="Input" id="save-button" onClick={Logar} />{' '}
                </Link>
            </div>
            
        </div>
    )
}



export default Home;





