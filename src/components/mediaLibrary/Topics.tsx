import SlideCard from "./slideItems/SlideCard";
import Slider from "./slideItems/Slider";

interface TopicsProps {}

const Topics: React.FC<TopicsProps> = () => {
  return (
    <Slider title="Topics">
      <SlideCard
        topicName="Topicname"
        location="Location"
        date="Freitag, 25/02/22"
        imgUrl="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
      <SlideCard
        topicName="Topicname"
        location="Location"
        date="Freitag, 25/02/22"
        imgUrl="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
      <SlideCard
        topicName="Topicname"
        location="Location"
        date="Freitag, 25/02/22"
        imgUrl="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
      <SlideCard
        topicName="Topicname"
        location="Location"
        date="Freitag, 25/02/22"
        imgUrl="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </Slider>
  );
};

export default Topics;
