const ProjectCard = ({ title, description, tech, id, index }) => {
  return (
    <div id={id} className="glassmorphism w-10/12 h-4/6 rounded-lg">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
