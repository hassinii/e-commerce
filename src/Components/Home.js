

import { useNavigate } from "react-router-dom";
import {card,CardHeader,CardBody, Container,Row,Col, Button} from "reactstrap";
import Base from './Base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




/*we Use Home(Props)  then we have fech dynamically data from  props.title ,props.description,
props.buttonName under return  <h1>{props.title}</h1>> 

but here is problem we can't pass Default value so we use 
object Distrutre 

so inside Home(props) we Use Home({title="Learn code",description="cording",buttonName="like"}) and return
<h1>{title}</h1>

here we set default value
*/




const Home=({title="default titile",description="default Description ",buttonName="Defalut Button",myFun})=>{
    let styleOb={
        padding:'20px',
        background:'#e2e2e2',
        border:'1px solid red',
        margin:'10px'
      }
      const navigate=useNavigate()
      
    return(
        // Dynamic Value By props from App.js

        
/*<h1>{title}</h1>
        <h2>{description}</h2>
        <button onClick={myFun}>{buttonName}</button> */
        //    <div >     
        // <card>
        //     <CardBody>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //     </CardBody>
        //    <CardHeader>
        //    <button onClick={myFun}>{buttonName}</button>
        //    </CardHeader>
            
        // </card>
        // </div> 
      

       <Base >
       <div className="banner" style={{ backgroundColor: 'rgba(255, 99, 71, 0.5)'}}>
            <Container >
                <Row>
                    <Col>
                    <div className="card sm-3 mt-2">
                        <div className="card-header">
                        <div className="card-title">
                            <marquee style={{fontSize:'25px'}}>Welcome To EL HAJBI MOTORS</marquee>
                        </div>
                        </div>

                        <div className="card-body">
                        <p className="text"> 
                        
                      

<h4 className="text mt-1">Présentation de l'entreprise </h4><br/>

EL HAJBI MOTORS est une entreprise dédiée au monde de l'automobile, qui se positionne comme un acteur majeur dans le secteur automobile. Notre entreprise offre une gamme complète de services pour répondre à tous les besoins de nos clients en matière de voitures, de maintenance et de pièces détachées.

<br/>

<h4 className="text mt-4">Vente de voitures</h4>EL HAJBI MOTORS propose une large sélection de voitures neuves et d'occasion, répondant à diverses marques, modèles et budgets. Nous sommes fiers de proposer des véhicules de haute qualité qui répondent aux normes les plus strictes en matière de performance, de sécurité et de confort. Notre équipe de professionnels de la vente est là pour vous guider dans le choix de la voiture qui correspond le mieux à vos besoins.<br/>

<h4 className="text mt-4">Maintenance automobile </h4> Notre centre de maintenance est équipé des dernières technologies et est géré par une équipe d'experts hautement qualifiés. Nous offrons des services de maintenance préventive et corrective, y compris l'entretien régulier, la réparation mécanique, l'entretien des systèmes électroniques, et bien plus encore. La sécurité et la satisfaction de nos clients sont notre priorité.<br/>

<h4 className="text mt-4">Importation de pièces détachées</h4>  EL HAJBI MOTORS dispose d'un réseau mondial de fournisseurs de pièces détachées de haute qualité pour les voitures de toutes marques. Nous importons des pièces d'origine et de rechange pour garantir que vos véhicules restent en excellent état de fonctionnement. Notre inventaire comprend une vaste gamme de pièces, des moteurs aux freins, en passant par l'électronique embarquée.<br/>

Notre engagement :

Chez EL HAJBI MOTORS, nous sommes déterminés à offrir à nos clients une expérience automobile exceptionnelle. Notre engagement envers la qualité, la transparence et la satisfaction du client est au cœur de tout ce que nous faisons. Nous visons à établir des relations à long terme avec nos clients, en devenant leur partenaire de confiance dans tous les aspects de l'automobile.<br/>

</p>
                        </div>
                    </div>

                    <div className="card sm-3 mt-2">
                        <div className="card-header">
                            <div className="card-title">
                            <h3 className="">Contact <br/></h3>
                            </div>
                        </div>
                        <div className="card-body">
                        

Adresse : RUE AL WAHDA MOHAMMEIDA NR 28<br/>
Téléphone : +212 24 93 76 74 <br/>
Email : <Link to="mailto:votreadresseemail@example.com">mehdioffhajbi@gmail.com</Link><br/>
Site Web : <a href="https://e-commerce-6mzv.vercel.app/store/all">https://e-commerce-6mzv.vercel.app/store/all</a><br/>

<p className="text-black mt-3">Rejoignez-nous chez EL HAJBI MOTORS pour une expérience automobile exceptionnelle. Nous sommes là pour vous aider à trouver la voiture parfaite, à maintenir votre véhicule en parfait état et à fournir les pièces dont vous avez besoin. Votre satisfaction est notre priorité absolue.</p>
                        
                        </div>
                    </div>
                        <h1 className="text-center" style={{fontWeight:1000,textTransform:"uppercase"}} ></h1>
                    

                    <Container className="text-center" >
                        <Button style={{marginBlock:10}} onClick={()=>navigate("/store/all")} className="rounded-0" size="lg" color="success"   >Go to Store</Button>
                    </Container>
            
                    </Col>
                </Row>
            </Container>



        </div>
       </Base>
        
        


    );
}

export default Home