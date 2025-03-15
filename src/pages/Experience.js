import { Link } from "react-router-dom";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-container p-6 space-y-6">
      <div className="experience-section">
        <h2 className="experience-title">Junior Accountant Experience</h2>
        <p className="experience-summary">
          Managed financial transactions, journals, and reconciliations at Sri Gopal Auto Stores.
        </p>
        <div>
        <Link to="/AccountantDescription">
          <button className="experience-button bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
            View Full Details
          </button>
        </Link>

        <Link to="/Accountant">
          <button className="experience-button bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
            Certificate
          </button>
        </Link>
        </div>
      </div>

      <div className="experience-section">
        <h2 className="experience-title">Frontend Developer Experience</h2>
        <p className="experience-summary">
          Developed user-friendly applications using React, React Native, and web technologies.
        </p>
        <Link to="/FrontendDeveloperDescription">
          <button className="experience-button bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">
            View Full Details
          </button>
        </Link>

        <Link to="/Developer">
          <button className="experience-button bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">
            Certificate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
