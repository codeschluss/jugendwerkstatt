import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build-jugendwerkstatt";

export const DescriptionFrom = (): ReactElement => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleSetValue = (_event: any, editor: any) => {
    setValue("description", editor.getData() || "");
  };

  const handleGetValue = (editor: any) => {
    editor.setData(getValues("description") ? getValues("description") : "");
  };

  const headingConfig = {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h2",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h3",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h4",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
    ],
  };

  return (
    <div className="xs:w-[99%] md:w-full prose">
      <CKEditor
        editor={ClassicEditor}
        onBlur={handleSetValue}
        onReady={handleGetValue}
      />
      {errors.description && (
        <p className="pt-4 text-primary">{errors.description.message}</p>
      )}
    </div>
  );
};
