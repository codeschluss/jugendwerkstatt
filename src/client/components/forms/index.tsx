import { ChevronRightIcon } from "@heroicons/react/outline";
import UploadIcon from "@heroicons/react/solid/UploadIcon";
import React from "react";
import { Link } from "react-router-dom";
import {
  MediaEntity,
  TemplateTypeEntity,
  useGetMeUploadsQuery,
  useGetTemplateTypesQuery,
} from "../../../GraphQl/graphql";
import Action from "../../../shared/components/table/Action";
import Row from "../../../shared/components/table/Row";
import TableName from "../../../shared/components/table/TableName";
import I from "../../../shared/components/ui/IconWrapper";
import detectDevice from "../../../shared/utils/isTouch";

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
    <div className="container px-4 pt-4 mx-auto">
      <h5 className="text-2xl font-bold">Formulare</h5>
      <ul className="pl-4 text-base font-normal text-gray-600 list-none">
        {fetchedData?.map((template, index) => {
          return (
            <li
              className="flex items-center px-2 md:w-96 md:bg-white md:my-2 md:h-16 "
              key={index}
            >
              <Link
                className="flex items-center justify-between w-full h-full"
                to={{
                  pathname: "/forms/templates",
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
      <h5 className="pt-4 text-2xl font-bold">
        Eigene Dokumente
        <I className="float-right h-10 opacity-70">
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
                  <Action onDelete />
                </div>
              );
            })}
          </div>{" "}
        </>
      )}

      {isTouch && (
        <ul className="pl-4 text-base font-normal text-gray-600 list-none">
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
