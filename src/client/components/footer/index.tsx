import { Link } from "react-router-dom";
import { PageEntity, usePublicPagesBasicQuery } from "../../../GraphQl/graphql";
import { SocialMedia } from "../ui/SocialMedia";

const Footer = () => {
  const pages = usePublicPagesBasicQuery();

  return (
    <footer
      className="bg-red-100  bottom-0 justify-around  p-3 text-gray-600 flex   w-full
    "
    >
      <div>
        {pages?.data?.getPages?.result?.map(
          (page: PageEntity | undefined | null) => (
            <p className="hover:text-red-400">
              <Link to={`/infoPage/${page?.id}`}>{page?.name}</Link>
            </p>
          )
        )}
      </div>
      <div>
        <p className="hover:text-red-400 cursor-pointer">Über uns</p>
        <p className="hover:text-red-400 cursor-pointer">Impressum</p>
      </div>
      <div className="w-32 flex flex-col items-end">
        <img className="w-full my-1" src="/assets/androidIcon.png" />
        <img className="w-full my-1" src="/assets/iosIcon.png" />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
