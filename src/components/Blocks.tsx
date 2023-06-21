import "./Blocks.scss";
import Block from "./Block";
import CallToAction from "./CallToAction";

const Blocks: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "Grow Together",
      copy: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      image: "illustration-grow-together.svg",
    },
    {
      id: 2,
      title: "Flowing Conversations",
      copy: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time- loading for a more natural flow.",
      image: "illustration-flowing-conversation.svg",
    },
    {
      id: 3,
      title: "Your Users",
      copy: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      image: "illustration-your-users.svg",
    },
  ];

  const blocks = data.map((block) => {
    return <Block key={block.id} {...block} />;
  });

  return (
    <>
      <section className="Blocks">
        {blocks}
        <CallToAction />
      </section>
    </>
  );
};

export default Blocks;
