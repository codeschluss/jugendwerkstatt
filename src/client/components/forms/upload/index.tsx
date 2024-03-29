import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetMeBasicQuery,
  useSaveUploadsMutation,
} from "../../../../GraphQl/graphql";
import TypeInput from "./TypeInput";

const UploadFile = () => {
  const [fileData, setFileData] = useState<any>({
    base64: "",
    mimeType: "",
    name: "",
  });
  const [fileName, setFileName] = useState<string>("");
  const [display, setDisplay] = useState<string>("block");
  const navigate = useNavigate();

  const uploadHandler = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    setFileData({
      base64: base64,
      mimeType: file.type,
      name: file.name,
    });
    setFileName(file.name);

    setDisplay("none");
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [saveUpload, { data, loading, error }] = useSaveUploadsMutation({
    variables: {
      uploads: [
        {
          base64: fileData.base64.split(",")[1],
          mimeType: fileData.mimeType,
          name: fileData.name,
        },
      ],
    },
    onCompleted: () => {
      setFileData({
        base64: "",
        mimeType: "",
        name: "",
      });
      setFileName("");
      navigate("/Forms");
    },
  });
  const fireUpload = () => {
    saveUpload();
  };

  return (
    <div className="flex justify-center">
      {!fileName && (
        <TypeInput onChange={(e: any) => uploadHandler(e)}>
          {" "}
          Datei auswählen
        </TypeInput>
      )}

      {fileName !== "" && (
        <span className="flex flex-col items-center justify-center">
          <button
            onClick={fireUpload}
            className="w-40 h-10 mt-10 text-white rounded-md bg-primary"
          >
            Speichern
          </button>
          <h4 className="my-5">{fileName}</h4>
        </span>
      )}
    </div>
  );
};

export default UploadFile;
