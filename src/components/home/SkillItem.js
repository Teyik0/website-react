import "../../styles/components/_skillItem.scss";
import React, { useState } from "react";

function SkillItem({ skillName, logo, category, type, niveau }) {
  const [skillItem, setSkill] = useState("");
  const [categoryItem, setCat] = useState("");
  const [typeItem, setType] = useState("");
  const [niveauItem, setNiveau] = useState("");

  const setHover = function () {
    let test = "";
    if (type === "langage") {
      test = "langage : ";
    } else {
      test = "nom : ";
    }
    setSkill(test + skillName);
    setCat("catégorie : " + category);
    setType("type : " + type);
    setNiveau("niveau : " + niveau);
  };
  const resetHover = function () {
    setSkill("");
    setCat("");
    setType("");
    setNiveau("");
  };

  return (
    <div>
      <li
        key={skillName}
        className="skill-item"
        onMouseOverCapture={setHover}
        onMouseOutCapture={resetHover}
      >
        <img src={logo} alt={skillName} width="50px" height="50px" />
      </li>
      <div className="info-skill-item">
        <span className="skillName">{skillItem}</span>
        <span className="category">{categoryItem}</span>
        <span className="type">{typeItem}</span>
        <span className="niveau">{niveauItem}</span>
      </div>
    </div>
  );
}

export default SkillItem;
