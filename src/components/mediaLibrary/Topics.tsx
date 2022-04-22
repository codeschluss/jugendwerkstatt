import SlideCard from "./slideItems/SlideCard";
import Slider from "./slideItems/Slider";

interface TopicsProps {
  topicTitle: string;
}

const Topics: React.FC<TopicsProps> = ({ topicTitle }) => {
  return (
    <Slider topicTitle={topicTitle}>
      <SlideCard videoTitle="How to...Bewerbungsvideos drehen" videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      {/* How to...Bewerbungsvideos drehen */}
      <SlideCard videoTitle="Very long text very long text very long text very long text very long text" videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <SlideCard videoTitle="Video title 3" videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <SlideCard videoTitle="Video title 4" videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <SlideCard videoTitle="Video title 5" videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    </Slider>
  );
};

export default Topics;
