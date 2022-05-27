import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../config/app";
import AuthContext from "../../../contexts/AuthContext";
import {
  useGetMeBasicQuery,
  useGetTemplateQuery,
  useGetUserTemplateQuery,
  UserEntity,
  useSaveUserTemplateMutation,
} from "../../../GraphQl/graphql";
import I from "../../ui/IconWrapper";

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
        navigate("/Forms");
      },
    });

  const downloadTemplate = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html: templateContent, name: templateName }),
    };
    await fetch(API_URL + "media/pdf", requestOptions)
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

  return (
    <div className="container mx-auto px-4 pt-4">
      <h5 className="text-2xl font-bold">
        {templateType}

        <I className="h-5 float-right" onClick={downloadTemplate}>
          <DownloadIcon />
        </I>
      </h5>
      <h5 className="text-xl font-normal pt-4" onClick={handleClick}>
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
          editor={ClassicEditor}
          data={templateContent}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setTemplateContent(data);
          }}
        />
      </div>

      <div className="w-full text-center pt-6">
        <button
          className="bg-primary text-white mb-2 w-3/4 h-10 rounded-2xl"
          onClick={saveTemplate}
        >
          Speichern
        </button>
      </div>
    </div>
  );
};

export default TemplateEdit;
