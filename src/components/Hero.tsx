import "./Hero.scss";
import HeroImage from "/images/illustration-mockups.svg";

const Hero: React.FC = () => {
  return (
    <div className="Hero">
      <h1 className="title">Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="btn">Get Started For Free</button>
      <img src={HeroImage} alt="" />
    </div>
  );
};

export default Hero;
