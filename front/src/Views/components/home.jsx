import MyNavbar from "../Navbar/MyNavBar";
import styles from '../form.module.css';

function Home(){

    //no encuentro razón para tener esto pero aún así sigo la HM (puedo importar la navbar directmante :/)

    return(

        <div className="Home">

            <MyNavbar />

            <h1 >Bienvenido a Nuestra pagina para agendar tu turno<br/>a los viajes interespaciales de elon mocs</h1>


        </div>

    )

}

export default Home;