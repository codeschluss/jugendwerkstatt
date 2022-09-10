import React, { useEffect } from "react";
import { FolderDownloadIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";

const DownloadDoc = () => {
  const { content } = useParams();
  const { token } = useParams();
  const { name } = useParams();
  const { type } = useParams();

  useEffect(() => {
    const downloadTemplatePdf = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          html: content,
          name: name,
          type: type,
        }),
      };
      await fetch(
        process.env.REACT_APP_API_URL + "media/export",
        requestOptions
      )
        .then((resp) => resp.blob())
        .then((blob) => {
          const urli = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = urli;
          a.download = `${name}.${type}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(urli);

          alert("your file has downloaded!");
        })
        .catch(() => alert("oh no!"));
    };
    downloadTemplatePdf();
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

export default DownloadDoc;
