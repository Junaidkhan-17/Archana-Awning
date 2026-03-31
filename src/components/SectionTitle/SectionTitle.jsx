import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`section-title ${centered ? "text-center" : ""}`} data-aos="fade-up">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
