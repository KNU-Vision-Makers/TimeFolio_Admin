import "../styles/globals.css"; // 전역 스타일 import

const TechStack = () => {
  // 기술 스택 목록과 해당하는 이미지 경로
  const techList = [
    { name: "React", image: "/images/react.png" },
    { name: "Next.js", image: "/images/nextjs.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "TypeScript", image: "/images/typescript.png" },
    { name: "Node.js", image: "/images/nodejs.png" },
    { name: "Express", image: "/images/express.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
    { name: "Chakra UI", image: "/images/chakra-ui.png" }, // 여기에 원하는 기술 스택을 추가하세요.
  ];

  return (
    <div className="techStackContainer">
      <h1 className="content-title-middle">Tech Stack</h1>
      <ul className="techList">
        {techList.map((tech, index) => (
          <li key={index} className="techItem">
            <img src={tech.image} alt={tech.name} className="techImage" />
            <span className="techName">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
