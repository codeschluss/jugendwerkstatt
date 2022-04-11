import Topics from "./Topics";

const Homepage: React.FC = () => {
  return (
    //Dummy data events.
    <div className="mt-8">
      <Topics topicTitle="Was will ich? Was kann ich?"/>
      <Topics topicTitle="Welche Ausbildungen gibt es?"/>
      <Topics topicTitle="Wie bewerbe ich mich?"/>
      <Topics topicTitle="Was kommt nach der Schule?"/>
    </div>
  );
};

export default Homepage;