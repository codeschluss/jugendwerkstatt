import { ShareIcon } from "@heroicons/react/outline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {
  FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, ViberIcon, ViberShareButton, WhatsappIcon, WhatsappShareButton
} from "react-share";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const SocialMedia: React.FC<{ url?: string }> = ({ url }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="cursor-pointer">
      <ShareIcon className="w-5" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share
          </Typography>

          <ul>
            <li>
              <FacebookShareButton
                url={`${process.env.REACT_APP_BASE_URL}${url}`}
                className="flex  items-center"
              >
                <FacebookIcon className="w-10 mr-1" /> <p>Facebook</p>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={`${process.env.REACT_APP_BASE_URL}${url}`}
                className="flex  items-center"
              >
                <TwitterIcon className="w-10 mr-1" /> Twitter
              </TwitterShareButton>
            </li>

            <li>
              <WhatsappShareButton
                url={`${process.env.REACT_APP_BASE_URL}${url}`}
                className="flex  items-center"
              >
                <WhatsappIcon className="w-10 mr-1" /> WhatsApp
              </WhatsappShareButton>
            </li>
            <li>
              <ViberShareButton
                url={`${process.env.REACT_APP_BASE_URL}${url}`}
                className="flex  items-center"
              >
                <ViberIcon className="w-10 mr-1" /> Viber
              </ViberShareButton>
            </li>
            <li>
              <LinkedinShareButton
                url={`${process.env.REACT_APP_BASE_URL}${url}`}
                className="flex  items-center"
              >
                <LinkedinIcon className="w-10 mr-1" /> LinkedIn
              </LinkedinShareButton>
            </li>
          </ul>
        </Box>
      </Modal>
    </div>
  );
};
