import { useNavigate } from "react-router-dom";

export default function ProjectRow({ project }) {
  const navigate = useNavigate();

  return (
    <button
      className="project-row"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="project-row-left">
        <h3>{project.title}</h3>
        <p>
          Gate {project.gate} · {project.shortDescription}
        </p>
      </div>

      <div className="project-row-right">
        <span>{project.status}</span>
      </div>
    </button>
  );
}