import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../data/team";

function Card({ id, name, about }) {
  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="name-container"
            layoutId={`name-container-${id}`}
          >
            <h2>{name}</h2>
            <span className="about">{about}</span>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function Cards({ selectedId }) {
    return (
        <ul className="card-list">
          {team.map(card => (
            <Card key={card.id} {...card} isSelected={card.id === selectedId} />
          ))}
        </ul>
    );
}
