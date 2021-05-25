import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import logo from "./assets/website_logo_transparent_background.png";
import ProjectCard from "./Components/ProjectCard";
import marketplace from './assets/market-place1.jpg';
import puppySocial from './assets/puppy-social1.jpg';
import petconnect from './assets/pet-connect1.jpg';



// Create a react component
let marketdesciption = "A place where you can buy, sell, or trade your gemtly used pet supplies with others";
let puppysocialdescription = "Have you wanted to socialize your puppy but needed help finding a friend? Find other puppy owners in your city.";
let petconnectdescription = "Going out of town and your pet has special needs? use this tool to help your caretaker understand what your pet needs.";
const App = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageHeader}>
        <div>
          <img src={logo} alt="kennel-trader-logo" />
        </div>
      </div>
      <div className={styles.homepageBody}>
        <h1>Coming Soon!</h1>
        <h3>
          Kennel Trader is dedcated to making help everyone provide the best
          life for thier pets! Here is some of whats to come:
        </h3>
      </div>
      <div className={styles.cardContainer}>
        <ProjectCard title="Market Place" body={marketdesciption} image={marketplace} />
        <ProjectCard title="Puppy Social" body={puppysocialdescription} image={puppySocial}  />
        <ProjectCard title="Pet Connect" body={petconnectdescription} image={petconnect} />
      </div>
    </div>
  );
};

// Take the component and shoe iut on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
