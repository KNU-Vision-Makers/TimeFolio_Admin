'use client';

import { useState } from "react";
import styles from "./page.module.css"; // CSS 파일

const TechStack = () => {
  const [techList, setTechList] = useState(["React", "Next.js", "JavaScript"]);
  const [newTech, setNewTech] = useState("");

  // 기술 스택 추가 함수
  const handleAddTech = () => {
    if (newTech.trim() !== "") {
      setTechList([...techList, newTech.trim()]);
      setNewTech(""); // 입력 필드 초기화
    }
  };

  // 기술 스택 삭제 함수
  const handleDeleteTech = (index) => {
    const updatedList = techList.filter((tech, i) => i !== index);
    setTechList(updatedList);
  };

  return (
    <div className={styles.techStackContainer}>
      <h2 className={styles.title}>기술 스택</h2>
      <ul className={styles.techList}>
        {techList.map((tech, index) => (
          <li key={index} className={styles.techItem}>
            {tech}
            <button 
              className={styles.deleteButton}
              onClick={() => handleDeleteTech(index)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.addTechContainer}>
        <input
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
          placeholder="기술 스택 추가 (예: TypeScript)"
          className={styles.inputField}
        />
        <button className={styles.addButton} onClick={handleAddTech}>
          추가
        </button>
      </div>
    </div>
  );
};

export default TechStack;
