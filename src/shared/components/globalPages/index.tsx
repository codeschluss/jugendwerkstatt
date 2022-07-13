import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SlideCard from "../../../client/components/slideItems/SlideCard";
import Slider from "../../../client/components/slideItems/Slider";
import { API_URL } from "../../../config/app";
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

  return (
    <div className="bg-gray-200 h-screen">
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
            <p onClick={() => navigate(-1)}>Zuruck</p>
          </>
        )}
      </header>
      {page.data?.getPage?.titleImage && (
        <div className="w-full p-2 my-5 bg-white ">
          <img
            className="md:w-1/5 w-1/2 mx-auto "
            src={`${API_URL}media/${page.data?.getPage?.titleImage?.id}`}
          />
        </div>
      )}
      <div className="w-full p-2 my-5 text-center bg-white ">
        <p className="w-full font-semibold text-2xl ">
          {page.data?.getPage?.name}
        </p>
      </div>
      <div className="w-full p-2 my-5  bg-white ">
        <p className="w-full  text-base ">{page.data?.getPage?.content}</p>
      </div>
      {page.data?.getPage?.video && (
        <div className="w-full p-2 my-5 bg-white ">
          <video
            width="320"
            height="240"
            controls
            className="w-1/2 md:w-1/4 mx-auto "
          >
            <source
              src={`${API_URL}media/${page.data?.getPage?.video?.id}`}
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {page?.data?.getPage?.images?.length !== 0 ? (
        <Slider title="Fotos">
          {page?.data?.getPage?.images?.map((el: any) => {
            return <SlideCard key={el?.id} imgUrl={el?.id} route="#" />;
          })}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
};

export default GlobalPage;
