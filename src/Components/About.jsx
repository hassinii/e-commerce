import React from "react"
import { Container,Row,Col } from "reactstrap"
import Base from "./Base"
import TextTransition, { presets } from "react-text-transition";


function About(){

    const TEXTS = [
        "Forest",
        "Building",
        "Tree",
        "Color"
      ];

    

    return(
        <Base>
            <Container className="mt-10"> 
                <Row>
                    <Col>
                    <h1 className="text-center" style={{fontWeight:1000}}>Welcome to Online </h1>
                    <p>EL HAJBI MOTORS, une entreprise renommée dans le domaine automobile, se distingue par son engagement envers l'excellence et la satisfaction client. Forts de nombreuses années d'expérience, nous nous sommes établis comme un acteur clé dans la vente de véhicules neufs et d'occasion, offrant un large éventail de choix pour répondre aux besoins et aux préférences variés de nos clients.

Au-delà de notre expertise dans la vente de véhicules, notre entreprise se démarque également par son service après-vente exceptionnel. Nous sommes fiers de notre équipe de professionnels qualifiés et dévoués, prêts à fournir des services de maintenance, de réparation et d'entretien de haute qualité. Notre objectif est de garantir que chaque véhicule qui passe par nos portes continue à fonctionner de manière optimale et en toute sécurité, offrant ainsi une expérience de conduite agréable et sereine à nos clients.

En outre, EL HAJBI MOTORS adopte une approche responsable envers l'environnement et la durabilité. Nous nous efforçons d'incorporer des pratiques respectueuses de l'environnement dans nos opérations commerciales et de promouvoir des solutions de mobilité durable. Notre engagement envers la communauté et notre responsabilité sociale sont ancrés dans notre ADN, et nous nous efforçons de contribuer positivement au bien-être de nos clients et de notre environnement.

Chez EL HAJBI MOTORS, notre passion pour l'automobile se reflète dans chaque aspect de notre entreprise. Nous aspirons à être bien plus qu'un simple concessionnaire automobile ; nous visons à être un partenaire de confiance pour nos clients, offrant des produits et des services de qualité supérieure qui dépassent leurs attentes. Notre histoire, notre engagement envers l'excellence et notre vision d'avenir font de nous un acteur incontournable dans le secteur automobile, propulsé par l'innovation, l'intégrité et le dévouement envers nos clients.
                         
                         
                         </p>
                         <img src="https://waifu2x.booru.pics/outfiles/42379a618208e37f43ed558772d4829b1f83354b_s2_n2_y2.jpg" alt="Description de l'image" className="image-style"   style={{ display: 'block', margin: '0 auto' }}
/>

                    </Col>
                </Row>
            </Container>
 </Base>
    )
   
   
}

export default About
