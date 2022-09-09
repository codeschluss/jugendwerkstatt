import React, { useEffect } from "react";
import { FolderDownloadIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";

const DownloadPage = () => {
  const { id } = useParams();
  const { url } = useParams();
  const { token } = useParams();
  const { name } = useParams();
  const { type } = useParams();

  useEffect(() => {
    const downloadHandler = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      await fetch(`${url}/${id}`, requestOptions)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = `${name}.${type}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          alert("your file has downloaded!");
        })

        .catch((e) => console.log(e));
    };
    downloadHandler();
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="mt-20 flex flex-col justify-center items-center">
        {" "}
        <p>
          Wenn der Download nicht automatisch startet, klicken Sie auf den
          grünen Ordner
        </p>
        <FolderDownloadIcon className=" h-48 w-48 text-green-600" />
      </div>
    </div>
  );
};

export default DownloadPage;
