import React, { useContext } from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import UploadIcon from "@heroicons/react/solid/UploadIcon";
import I from "../ui/IconWrapper";
import { Link } from "react-router-dom";
import {
  MediaEntity,
  TemplateTypeEntity,
  useGetMeBasicQuery,
  useGetMeUploadsQuery,
  useGetTemplateTypesQuery,
  useGetUserQuery,
} from "../../GraphQl/graphql";
import AuthContext from "../../contexts/AuthContext";

const Forms: React.FC = () => {
  const result = useGetTemplateTypesQuery({
    fetchPolicy: "network-only",
  });

  const fetchedData: [TemplateTypeEntity] = result.data?.getTemplateTypes
    ?.result as [TemplateTypeEntity];

  const userUploads = useGetMeUploadsQuery({
    fetchPolicy: "network-only",
  });

  const fetchedUserUploads: [MediaEntity] = userUploads.data?.me?.uploads as [
    MediaEntity
  ];

  return (
    <div className="container mx-auto px-4 pt-4">
      <h5 className="text-2xl font-bold">Formulare</h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedData?.map((template, index) => {
          return (
            <li className="pt-4" key={index}>
              <Link
                to={{
                  pathname: "/Forms/Templates",
                }}
                state={{
                  templateType: {
                    name: template.name,
                    id: template.id,
                  },
                }}
              >
                {template.name}
                <I className="h-5 float-right">
                  <ChevronRightIcon />
                </I>
              </Link>
            </li>
          );
        })}
      </ul>
      <h5 className="text-2xl font-bold pt-4">
        Eigene Dokumente
        <I className="h-10 float-right opacity-70">
          <Link to="/upload-file">
            {" "}
            <UploadIcon />
          </Link>
        </I>
      </h5>
      <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {fetchedUserUploads?.map((file, index) => {
          return (
            <li className="pt-4" key={index}>
              {file.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forms;
