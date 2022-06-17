import { ShareIcon } from "@heroicons/react/outline";
import DropDown from "../../../shared/components/ui/DropDown";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  ViberIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { BASE_URL } from "../../../config/app";

export const ShareButton: React.FC<{ url: any }> = ({ url }) => {
  console.log(BASE_URL + url, "theUrl");

  return (
    <DropDown
      position="right"
      className="mr-3 ml-3 border-r border-gray-200 pr-3  flex"
      boxClassName="w-72 mt-3 py-2.5 px-4"
      name={<ShareIcon className="w-5" />}
    >
      <div>
        <ul>
          <li>
            <FacebookShareButton
              url={`${BASE_URL}${url}`}
              className="flex  items-center"
            >
              <FacebookIcon className="w-10 mr-1" /> <p>Facebook</p>
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={`${BASE_URL}${url}`}
              className="flex  items-center"
            >
              <TwitterIcon className="w-10 mr-1" /> Twitter
            </TwitterShareButton>
          </li>

          <li>
            <WhatsappShareButton
              url={`${BASE_URL}${url}`}
              className="flex  items-center"
            >
              <WhatsappIcon className="w-10 mr-1" /> WhatsApp
            </WhatsappShareButton>
          </li>
          <li>
            <ViberShareButton
              url={`${BASE_URL}${url}`}
              className="flex  items-center"
            >
              <ViberIcon className="w-10 mr-1" /> Viber
            </ViberShareButton>
          </li>
          <li>
            <LinkedinShareButton
              url={`${BASE_URL}${url}`}
              className="flex  items-center"
            >
              <LinkedinIcon className="w-10 mr-1" /> LinkedIn
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </DropDown>
  );
};
