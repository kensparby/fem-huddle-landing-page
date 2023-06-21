import "./Block.scss";

interface BlockProps {
  title: string;
  copy: string;
  image: string;
}

const Block: React.FC<BlockProps> = ({ title, copy, image }) => {
  return (
    <div className="Block">
      <img src={"/images/" + image} alt="" />
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
};

export default Block;
