import React, { useContext } from "react";
import UploadIcon from "@heroicons/react/solid/UploadIcon";
import I from "../../../shared/components/ui/IconWrapper";
import { Link } from "react-router-dom";
import {
  MediaEntity,
  TemplateTypeEntity,
  useGetMeBasicQuery,
  useGetMeUploadsQuery,
  useGetTemplateTypesQuery,
  useGetUserQuery,
} from "../../../GraphQl/graphql";
import AuthContext from "../../../contexts/AuthContext";
import detectDevice from "../../../shared/utils/isTouch";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Row from "../../../shared/components/table/Row";
import TableName from "../../../shared/components/table/TableName";
import Action from "../../../shared/components/table/Action";

const Forms: React.FC = () => {
  const isTouch = detectDevice();

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
            <li
              className="px-2 md:w-96  md:bg-white md:my-2 flex items-center  md:h-16    "
              key={index}
            >
              <Link
                className="w-full h-full flex justify-between items-center"
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
                <p>{template.name}</p>

                <ChevronRightIcon className="h-5" />
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
      {!isTouch && (
        <>
          {" "}
          <div className="flex w-full">
            <TableName rowName="Dokumentenname" />
            <TableName rowName="Aktionen" />
          </div>
          <div>
            {fetchedUserUploads?.map((el) => {
              return (
                <div className="flex justify-between w-full">
                  <Row rowItem={el.name} />
                  <Action onApprove onDelete />
                </div>
              );
            })}
          </div>{" "}
        </>
      )}

      {isTouch && (
        <ul className="list-none text-base font-normal pl-4 text-gray-600">
          {fetchedUserUploads?.map((file, index) => {
            return (
              <li className="pt-4" key={index}>
                {file.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Forms;
