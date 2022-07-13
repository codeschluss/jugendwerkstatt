import React, { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../../config/app";
import {
  useGetMeBasicQuery,
  useGetTemplateQuery,
  useGetUserTemplateQuery,
  useSaveUserTemplateMutation,
} from "../../../../GraphQl/graphql";
import I from "../../../../shared/components/ui/IconWrapper";
import DropDown from "../../../../shared/components/ui/DropDown";

const TemplateEdit: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const { templateType, name, templateTypeId, edit }: any = location.state;
  const [templateName, setTemplateName] = useState(name);
  const [templateContent, setTemplateContent] = useState("");
  const [editName, setEditName] = useState(false);

  const userBasic = useGetMeBasicQuery();
  const userBasicId: any = userBasic?.data?.me?.id;
  const handleClick = (): void => {
    setEditName(true);
  };

  const handleChange = (event: any): void => {
    setTemplateName(event.target.value);
  };

  const [saveUserTemplateMutation, { data, loading, error }] =
    useSaveUserTemplateMutation({
      variables: {
        name: templateName,
        content: templateContent,
        templateTypeId: templateTypeId,
        templateId: edit ? id : "",
        userId: userBasicId,
      },
      onCompleted: () => {
        navigate("/forms");
      },
    });

  const downloadTemplateDocx = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: templateContent,
        name: templateName,
        type: "docx",
      }),
    };
    await fetch(API_URL + "media/export", requestOptions)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${templateName}.docx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file has downloaded!");
      })
      .catch(() => alert("oh no!"));
  };
  const downloadTemplatePdf = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: templateContent,
        name: templateName,
        type: "pdf",
      }),
    };
    await fetch(API_URL + "media/export", requestOptions)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${templateName}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file has downloaded!");
      })
      .catch(() => alert("oh no!"));
  };

  const saveTemplate = (): void => {
    saveUserTemplateMutation();
  };

  const userTemplateResult = useGetUserTemplateQuery({
    variables: { id: id! },
    fetchPolicy: "network-only",
  });
  const templateResult = useGetTemplateQuery({
    variables: { id: id! },
    fetchPolicy: "network-only",
  });

  const userTemplateContent = userTemplateResult.data?.getUserTemplate?.content;
  const templateContentResult = templateResult.data?.getTemplate?.content;

  useEffect(() => {
    if (edit && userTemplateContent) {
      setTemplateContent(userTemplateContent);
    } else if (edit && templateContentResult) {
      setTemplateContent(templateContentResult);
    }
  }, [userTemplateContent, templateContentResult]);

  function uploadAdapter(loader: any) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file: any) => {
            body.append("files", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${API_URL}`, {
              method: "post",
              body: body,
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="container px-4 pt-4 mx-auto">
      <h5 className="text-2xl font-bold">
        {templateType}

        <DropDown
          position="right"
          className="float-right mt-auto"
          boxClassName="w-40 mt-3 py-2.5 px-1"
          name={<DownloadIcon className="w-5" />}
          withArrow={false}
        >
          <p className="text-sm font-normal text-center"> format:</p>
          <p
            onClick={downloadTemplatePdf}
            className="text-base font-normal text-center my-1 cursor-pointer hover:bg-gray-100"
          >
            .pdf
          </p>
          <p
            onClick={downloadTemplateDocx}
            className="text-base font-normal text-center my-1 cursor-pointer hover:bg-gray-100"
          >
            .docx
          </p>
        </DropDown>
      </h5>
      <h5 className="pt-4 text-xl font-normal" onClick={handleClick}>
        {editName ? (
          <input
            type="text"
            className="border-b-2 border-black focus-visible:outline-none focus:outline-none"
            value={templateName}
            onChange={handleChange}
          />
        ) : (
          templateName
        )}
      </h5>

      <div className="pt-4 pb-6">
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
          }}
          editor={ClassicEditor}
          data={templateContent}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setTemplateContent(data);
          }}
        />
      </div>

      <div className="w-full pt-6 text-center">
        <button
          className="w-3/4 h-10 mb-2 text-white bg-primary rounded-2xl"
          onClick={saveTemplate}
        >
          Speichern
        </button>
      </div>
    </div>
  );
};

export default TemplateEdit;
