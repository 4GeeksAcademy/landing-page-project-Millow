import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import cafeImage from "/workspaces/landing-page-project-Millow/src/img/cafe.avif";
import montañismoImage from "/workspaces/landing-page-project-Millow/src/img/montañismo.avif";
import mujerImage from "/workspaces/landing-page-project-Millow/src/img/mujer.avif";
import programacionImage from "/workspaces/landing-page-project-Millow/src/img/programacion.avif";
//create your first component
const Home = () => {
  const data = [
    {
      title: "Card1",
      description: "This is the first card",
      image: programacionImage,
    },
    {
      title: "Card2",
      description: "This is the second card",
      image: mujerImage,
    },
    {
      title: "Card3",
      description: "This is the third card",
      image: montañismoImage,
    },
    {
      title: "Card4",
      description: "This is the forth card",
      image: cafeImage,
    },
	
  ];
  return (
    <div className="text-center">
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <Jumbotron />
        </div>
        <div className="d-flex justify-content-around gap-3">
          <div className="row">
            {data.map((card, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <Card
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-dark text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
