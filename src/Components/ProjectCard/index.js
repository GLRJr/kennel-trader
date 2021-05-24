import React from 'react';
import Image from '../../assets/318x180.svg';
import style from './styles.module.css';

let image = Image;
let title = "Card Title";
let body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const ProjectCard = (props, onClick) => {
  return (
    <div className={style.main}>
      <div className={style.ImageContainer}>
        <img src={props.image} />
      </div>

      <div className={style.cardContent}>
        <div className={style.cardTitle}>
          <h1>{props.title}</h1>
        </div>

        <div className={style.cardDescription}>
          <p>{props.body}</p>
        </div>

        <div className={style.btn}>
          <button onClick={console.log("clicked")}>
            <a>See Full Project</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
