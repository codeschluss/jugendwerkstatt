import { Link, useNavigate } from "react-router-dom";
import Footer from "../../footer";
import ButtonUi from "../../ui/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PlayIcon } from "@heroicons/react/outline";
import {
  EventEntity,
  JobAdEntity,
  LinkEntity,
  useGetEventsQuery,
  useGetJobAdsQuery,
  useGetLinksQuery,
} from "../../../../GraphQl/graphql";
import { formatDate } from "../../../../admin/utils";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

type Anchor = "top";

const DefaultHome: React.FC = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const navigate = useNavigate();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img
        className="w-full object-left-top object-cover relative h-[600px] md:h-80"
        src="/assets/Background1.png"
        alt=""
      />

      <div
        className="md:w-1/2 bg-transparent w-full  absolute bottom-5 p-1 lg:right-72  md:right-64 md:top-5 h-1/2 flex flex-col 
      justify-between items-center"
      >
        <p className="text-sm p-2 bg-[#fcf3f5] rounded-lg  ">
          Hallo und Willkommen! <br />
          Dies ist die App der Jugendwerkstatt alpha e.V. in Wuppertal. Du bist
          in der Jugendwerkstatt tätig? Dann geht es hier mit der Anmeldung
          weiter für dich…
          <br /> <br />
          Wenn du noch nicht in der Jugendwerkstatt angemeldet bist, bewirb dich
          bei uns, wir freuen uns auf dich! Weitere Informationen findest du
          unter: <a href="https://www.alphaev.de">https://www.alphaev.de</a>
        </p>
        <Link className="w-1/2  md:h-1/2 mt-2  " to="/login">
          <ButtonUi isValidated={true} isDisabled={true}>
            Einlogen
          </ButtonUi>
        </Link>
        <Link className="w-1/2   md:h-1/2 mt-2   " to="/register">
          <ButtonUi isValidated={true} isDisabled={true}>
            Registrieren
          </ButtonUi>
        </Link>
      </div>
    </Box>
  );

  const events = useGetEventsQuery({
    variables: {
      params: {
        page: 0,
        size: 5,
      },
    },
  });

  const jobs = useGetJobAdsQuery({
    variables: {
      params: {
        page: 0,
        size: 5,
      },
    },
  });

  const libs = useGetLinksQuery({
    variables: {
      params: {
        page: 0,
        size: 8,
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
        dynamicHeight={false}
        showThumbs={false}
        interval={9000}
      >
        {events.data?.getEvents?.result?.map(
          (el: EventEntity | undefined | null) => {
            return (
              <div key={el?.id}>
                <img
                  className="h-[750px] object-cover relative"
                  src={`data:${el?.titleImage?.mimeType};base64,${el?.titleImage?.base64}`}
                />
                <div
                  onClick={toggleDrawer("top", true)}
                  className="cursor-pointer top-2/3 left-0 h-1/3 w-full text-white flex justify-center  
                absolute bg-black bg-opacity-40"
                >
                  <div>
                    <p className=" text-3xl     w-full">
                      {" "}
                      {el?.category?.name}
                    </p>
                    <p className=" text-xl    w-full">
                      {" "}
                      {formatDate(el?.nextSchedule?.startDate)}
                    </p>
                    <p className=" text-xl    w-full"> {el?.address?.place}</p>
                  </div>
                </div>

                <p
                  onClick={toggleDrawer("top", true)}
                  className="legend cursor-pointer"
                >
                  {el?.name}
                </p>
              </div>
            );
          }
        )}
      </Carousel>
      <div className="flex m-10 px-2 flex-col md:flex-row  ">
        {libs.data?.getLinks?.result?.map(
          (el: LinkEntity | undefined | null) => {
            return (
              <a
                href={`${el?.url}`}
                key={el?.id}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gray-400 hover:bg-primary my-3 md:my-0
              transition-all transform-gpu w-9/12
               text-white mx-10 md:w-52 h-28 rounded-lg p-1  cursor-pointer relative"
              >
                {el?.title}
                <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
                  <PlayIcon className="w-10 " />
                </div>
              </a>
            );
          }
        )}
      </div>
      <div className="md:w-1/3 m-auto  w-screen mt-10 px-2 md:px-0 ">
        <p className="text-3xl text-center">Neuste Jobs</p>
        <Carousel
          emulateTouch={true}
          dynamicHeight={false}
          showThumbs={false}
          interval={9000}
        >
          {jobs.data?.getJobAds?.result?.map(
            (el: JobAdEntity | undefined | null) => {
              return (
                <div
                  onClick={toggleDrawer("top", true)}
                  style={{ background: `${el?.type?.color}` }}
                  className={` text-white cursor-pointer  w-full hover:border-blue-900 border-2 border-gray-500 h-60  my-5 rounded-lg p-5`}
                  key={el?.id}
                >
                  <p className="m-auto text-left  text-xl w-full">
                    <b>{el?.title}</b>
                  </p>
                  <div className="flex justify-between">
                    {" "}
                    <div>
                      <p>{el?.company?.name}</p>
                      <p>{el?.company?.address?.place}</p>
                    </div>
                    <div>
                      <p>{formatDate(el?.created)}</p>
                    </div>
                  </div>
                  <div
                    className=" prose text-white prose-p-m-0 w-full overflow-y-scroll mt-2 mb-2 h-1/2 flex justify-center"
                    dangerouslySetInnerHTML={{
                      __html: el?.content ? el.content : "",
                    }}
                  />
                </div>
              );
            }
          )}
        </Carousel>
      </div>
      <div>
        {(["top"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state.top}
              onClose={toggleDrawer(anchor, false)}
            >
              {list("top")}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DefaultHome;
