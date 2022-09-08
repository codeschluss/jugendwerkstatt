import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";
import SlideCard from "../../../client/components/slideItems/SlideCard";
import Slider from "../../../client/components/slideItems/Slider";
import { useGetSinglePublicPageQuery } from "../../../GraphQl/graphql";
import { useAuthStore } from "../../../store";

const GlobalPage = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const { id } = useParams();

  const page = useGetSinglePublicPageQuery({
    variables: {
      entity: {
        id: id,
      },
    },
  });

  const desc: any =
    page.data?.getPage?.content?.substring(0, 1) === '"'
      ? page.data?.getPage?.content?.substring(
          1,
          page.data?.getPage?.content?.length - 1
        )
      : page.data?.getPage?.content;

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <header
        className={`w-full h-16 bg-primary flex ${
          isAuthenticated ? "justify-start" : "justify-end"
        } px-3 items-center text-white text-xl`}
      >
        {!isAuthenticated ? (
          <div className="flex justify-around w-full">
            <p className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/register")}>
              Register
            </p>
          </div>
        ) : (
          <>
            <ChevronLeftIcon className="w-6 mr-2" />
            <p className="cursor-pointer" onClick={() => navigate(-1)}>
              Zurück
            </p>
          </>
        )}
      </header>
      {page.data?.getPage?.titleImage && (
        <div className="w-4/5 p-2 my-5 bg-white  ">
          <img
            className="md:w-1/5 w-1/2 mx-auto "
            src={`data:${page?.data?.getPage?.titleImage?.mimeType};base64,${page?.data?.getPage?.titleImage?.base64}`}
          />
        </div>
      )}
      <div className=" p-2 my-5 text-center bg-white w-4/5 ">
        <p className="w-full font-semibold text-2xl ">
          {page.data?.getPage?.name}
        </p>
      </div>
      <div className=" p-2 my-5  bg-white prose-xl w-4/5  ">
        <div
          className="prose-xl"
          dangerouslySetInnerHTML={{
            __html: page.data?.getPage?.content ? desc : "",
          }}
        />
      </div>
      {page.data?.getPage?.video && (
        <div className=" p-2 my-5 bg-white w-4/5">
          <video
            width="320"
            height="240"
            controls
            className="w-1/2 md:w-1/4 mx-auto "
          >
            <source
              src={`data:${page?.data?.getPage?.video?.mimeType};base64,${page?.data?.getPage?.video?.base64}`}
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {page?.data?.getPage?.images?.length !== 0 ? (
        <Slider title="Fotos " className="w-full md:w-4/5">
          {page?.data?.getPage?.images?.map((el: any) => {
            return (
              <SlideCard
                gradient={false}
                key={el?.id}
                imgUrl={`data:${el?.mimeType};base64,${el?.base64}`}
                route="#"
              />
            );
          })}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
};

export default GlobalPage;
