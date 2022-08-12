import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetMeBasicQuery,
  useSaveUserMutation,
} from "../../../../../GraphQl/graphql";
import TypeInput from "./TypeInput";

const UploadImg = () => {
  const user = useGetMeBasicQuery();

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

  const [saveUpload, { data }] = useSaveUserMutation({
    variables: {
      entity: {
        id: user.data?.me?.id,
        profilePicture: {
          base64: fileData.base64.split(",")[1],
          mimeType: fileData.mimeType,
          name: fileData.name,
        },
      },
    },
    onCompleted: () => {
      setFileData({
        base64: "",
        mimeType: "",
        name: "",
      });
      setFileName("");
      navigate("/profile");
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
        <span className="flex items-center justify-center flex-col">
          <button
            onClick={fireUpload}
            className="w-40 h-10 bg-primary rounded-md mt-10 text-white"
          >
            Speichern
          </button>
          <span className="mt-24 w-60">
            <img src={fileData.base64} alt="" className="w-full h-full" />
          </span>
          <h5>{fileName}</h5>
        </span>
      )}
    </div>
  );
};

export default UploadImg;
