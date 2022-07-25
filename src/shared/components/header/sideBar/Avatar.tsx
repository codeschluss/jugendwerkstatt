import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import { readAuthToken } from "../../../utils";
import { API_URL } from "../../../../config/app";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string?.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name && `${name?.split(" ")[0][0].toUpperCase()}`,
  };
}

const BackgroundLetterAvatars: React.FC<{ fullname: any }> = ({ fullname }) => {
  const token = readAuthToken("accessToken");
  const [img, setImg] = React.useState<any>();

  const me = useGetMeBasicQuery();

  const requestOptions: any = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      responseType: "arraybuffer",
    },
  };

  const fetchImage = async () => {
    const res = await fetch(
      `${API_URL}media/${me.data?.me?.profilePicture?.id}`,
      requestOptions
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  React.useEffect(() => {
    if (me.data?.me?.profilePicture) {
      fetchImage();
    }
  }, [me.data?.me?.profilePicture, token]);

  return me.data?.me?.profilePicture ? (
    <div className="w-12 h-12 ">
      <img className="w-full h-full bg-cover rounded-full" src={img} />
    </div>
  ) : (
    <Avatar {...stringAvatar(fullname)} />
  );
};
export default BackgroundLetterAvatars;
