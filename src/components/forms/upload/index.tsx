import React, { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useSaveUserMutation } from "../../../GraphQl/graphql";
import TypeInput from "./TypeInput";

const UploadFile = () => {
  const { theUser } = useContext(AuthContext);
  const [fileData, setFileData] = useState<any>({
    base64: "",
    mimeType: "",
    name: "",
  });
  const [fileName, setFileName] = useState<string>("");
  const [display, setDisplay] = useState<string>("block");

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

  const [saveUserMutation, { data, loading, error }] = useSaveUserMutation({
    variables: {
      entity: {
        id: theUser.id,
        uploads: [
          {
            base64: fileData.base64,
            mimeType: fileData.mimeType,
            name: fileData.name,
          },
        ],
      },
    },
    onCompleted: () => {
      alert("completed");
    },
  });

  const fireUpload = () => {
    saveUserMutation();
  };

  return (
    <div className="flex justify-center">
      <button
        className="w-40 h-10 bg-primary rounded-md mt-10 text-white"
        style={{ display: display }}
      >
        <TypeInput onChange={(e: any) => uploadHandler(e)}>
          {" "}
          Chose a file
        </TypeInput>
      </button>

      {fileName !== "" && (
        <span className="flex items-center justify-center flex-col">
          <button
            onClick={fireUpload}
            className="w-40 h-10 bg-primary rounded-md mt-10 text-white"
          >
            Hochladen
          </button>
          <h4 className="my-5">{fileName}</h4>
        </span>
      )}
    </div>
  );
};

export default UploadFile;
