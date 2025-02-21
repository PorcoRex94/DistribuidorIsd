import { HeroContainer } from "./hero-styles";

export const Hero = ({ title, backgroundImage }) => {
  return (
    <HeroContainer
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__content">
        <h1 className="hache__uno">{title}</h1>
      </div>
    </HeroContainer>
  );
};
