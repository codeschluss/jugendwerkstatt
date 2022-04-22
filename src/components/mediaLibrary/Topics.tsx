import SlideCard from "./slideItems/SlideCard";
import Slider from "./slideItems/Slider";

interface TopicsProps {
  topicTitle: string;
}

const Topics: React.FC<TopicsProps> = ({ topicTitle }) => {
  return (
    <Slider topicTitle={topicTitle}>
      <SlideCard videoTitle="Video title 1" videoUrl="Location" />
      <SlideCard videoTitle="Video title 2" videoUrl="Location" />
      <SlideCard videoTitle="Video title 3" videoUrl="Location" />
      <SlideCard videoTitle="Video title 4" videoUrl="Location" />
      <SlideCard videoTitle="Video title 5" videoUrl="Location" />
    </Slider>
  );
};

export default Topics;
