import { ChevronRightIcon } from "@heroicons/react/outline";
import UploadIcon from "@heroicons/react/solid/UploadIcon";
import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/app";
import {
  MediaEntity,
  TemplateTypeEntity,
  useDeleteUploadsMutation,
  useGetMeUploadsQuery,
  useGetTemplateTypesQuery,
} from "../../../GraphQl/graphql";
import Action from "../../../shared/components/table/Action";
import Row from "../../../shared/components/table/Row";
import TableName from "../../../shared/components/table/TableName";
import I from "../../../shared/components/ui/IconWrapper";
import { readAuthToken } from "../../../shared/utils";
import detectDevice from "../../../shared/utils/isTouch";

const Forms: React.FC = () => {
  const isTouch = detectDevice();
  const token = readAuthToken("accessToken");
  const result = useGetTemplateTypesQuery({
    fetchPolicy: "network-only",
  });

  const fetchedData: [TemplateTypeEntity] = result.data?.getTemplateTypes
    ?.result as [TemplateTypeEntity];

  const userUploads = useGetMeUploadsQuery({
    fetchPolicy: "network-only",
  });

  const [deleteUpload] = useDeleteUploadsMutation();

  const fetchedUserUploads: [MediaEntity] = userUploads.data?.me?.uploads as [
    MediaEntity
  ];

  const downloadHandler = async (
    mediaId: any,
    mediaName: any,
    mediaMimeType: any
  ) => {
    const requestOptions = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    await fetch(API_URL + `media/download/${mediaId}`, requestOptions)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${mediaName}.${mediaMimeType}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file has downloaded!");
      })

      .catch((e) => console.log(e));
  };

  return (
    <div className="container px-4 md:pl-12 pt-4 mx-auto ">
      <h5 className="text-2xl font-bold md:ml-4">Formulare</h5>
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
      <h5 className="pt-4 text-2xl font-bold md:ml-4">
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
                <div key={el.id} className="flex justify-between w-full">
                  <Row rowItem={el.name} />
                  <Action
                    onDownload={() =>
                      downloadHandler(
                        el.id,
                        el?.name,
                        el?.mimeType?.split("/")[1]
                      )
                    }
                    onDelete={() =>
                      deleteUpload({
                        variables: {
                          uploadIds: el.id,
                        },
                      }).then(() => userUploads.refetch())
                    }
                  />
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
