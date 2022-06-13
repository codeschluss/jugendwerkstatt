import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from "../../atoms";

export const DescriptionFrom = (): ReactElement => {
  const { trigger, setValue, getValues } = useFormContext();

  const handleSetValue = (_event: any, editor: any) => {
    setValue("description", JSON.stringify(editor.getData() || ""));
  };

  const handleGetValue = (editor: any) => {
    editor.setData(
      getValues("description") ? JSON.parse(getValues("description")) : ""
    );
  };

  const handleTrigger = () => trigger("description");

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onBlur={handleSetValue}
        onReady={handleGetValue}
      />
      <Button type="button" className="mt-6" onClick={handleTrigger}>
        Vorlage erstellen
      </Button>
    </div>
  );
};
