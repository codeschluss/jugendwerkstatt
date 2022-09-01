import { Link } from "react-router-dom";
import { PageEntity, usePublicPagesBasicQuery } from "../../../GraphQl/graphql";
import { SocialMedia } from "../ui/SocialMedia";

const Footer = () => {
  const pages = usePublicPagesBasicQuery();

  return (
    <footer
      className="bg-white  bottom-0 justify-between md:justify-around  p-3 text-gray-600 flex   w-full
    "
    >
      <div>
        {pages?.data?.getPages?.result?.map(
          (page: PageEntity | undefined | null) => (
            <p key={page?.id} className="hover:text-red-400 md:ml-24 ">
              <Link to={`/infoPage/${page?.id}`}>{page?.name}</Link>
            </p>
          )
        )}
      </div>
      <div className="md:w-32  flex-col items-end  md:flex ">
        <img
          className="w-full hidden md:block my-1"
          src="/assets/androidIcon.png"
        />
        <img
          className="w-full hidden md:block my-1"
          src="/assets/iosIcon.png"
        />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
