import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { team } from "../data/team";

export function Modal({ id }) {
    const { name, about } = team.find(member => member.id === id);
  
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            className="overlay"
            >
            <Link to="/" />
            </motion.div>

            <div className="card-content-container open">
            <motion.div className="card-content" layoutId={`card-container-${id}`}>
                <motion.div
                className="name-container"
                layoutId={`name-container-${id}`}
                >
                <span className="about">{about}</span>
                <h2>{name}</h2>
                </motion.div>
                <motion.div className="content-container" animate>
                    <p>adajsidbasjbdasjdabsjidasbdjsibdjsaibdasjidbasjdibasjdibasjdiasbdjiasbdjasi</p>
                </motion.div>
            </motion.div>
            </div>
        </>
    );
  };