export default function CoreConcept({ image, title, description }) {
  // rather than writing  props parameter destructure it
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
