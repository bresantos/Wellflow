import PropTypes from 'prop-types';

export default function Placeholder({ title, description }) {
  return (
    <div className="placeholder-card">
      <div className="placeholder-content">
        <div className="placeholder-badge">Em construção</div>
        <h2 className="placeholder-title">{title}</h2>
        {description && <p className="placeholder-description">{description}</p>}
      </div>
    </div>
  );
}

Placeholder.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};
