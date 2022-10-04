import Avatar from "@mui/material/Avatar";
import * as React from "react";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import { useAuthStore } from "../../../../store";

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
  const { isAuthenticated } = useAuthStore();

  const me = useGetMeBasicQuery({
    skip: !isAuthenticated,
  });

  return me.data?.me?.profilePicture ? (
    <div className="w-12 h-12 ">
      <img
        className="w-full h-full bg-cover rounded-full"
        src={`data:${me.data?.me?.profilePicture?.mimeType};base64,${me.data?.me?.profilePicture?.base64}`}
      />
    </div>
  ) : (
    <Avatar {...stringAvatar(fullname)} />
  );
};
export default BackgroundLetterAvatars;
