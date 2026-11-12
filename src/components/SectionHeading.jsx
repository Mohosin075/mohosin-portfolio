import PropTypes from "prop-types";
import { Code2 } from "lucide-react";
import "./SectionHeading.css";

export default function SectionHeading({ label, title, accent, description, id, className = "", icon: Icon = Code2 }) {
  return (
    <div className={`section-heading ${className}`}>
      <span className="section-heading-label"><Icon size={18} aria-hidden="true" />{label}</span>
      <h2 className="section-heading-title" id={id}>{title}{accent && <> <span>{accent}</span></>}</h2>
      {description && <p className="section-heading-description">{description}</p>}
    </div>
  );
}

SectionHeading.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  accent: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.elementType,
};
