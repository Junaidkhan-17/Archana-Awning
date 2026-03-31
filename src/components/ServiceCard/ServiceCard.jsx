import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="service-card card-surface p-4" data-aos="fade-up">
      <div className="service-icon">{icon}</div>
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default ServiceCard;
