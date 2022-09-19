import { Link } from "react-router-dom";
import Footer from "../../footer";
import Button from "../../ui/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { EventEntity, useGetEventsQuery } from "../../../../GraphQl/graphql";
const DefaultHome: React.FC = () => {
  const events = useGetEventsQuery({
    variables: {
      params: {
        page: 0,
        size: 5,
      },
    },
  });

  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        centerMode={true}
        dynamicHeight={true}
        showThumbs={false}
        interval={9000}
      >
        {events.data?.getEvents?.result?.map(
          (el: EventEntity | undefined | null) => {
            return (
              <div key={el?.id}>
                <img
                  src={`data:${el?.titleImage?.mimeType};base64,${el?.titleImage?.base64}`}
                />
                <p className="legend">{el?.name}</p>
              </div>
            );
          }
        )}
      </Carousel>

      <Footer />
    </>
  );
};

export default DefaultHome;
