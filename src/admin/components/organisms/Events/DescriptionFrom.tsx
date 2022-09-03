import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const DescriptionFrom = (): ReactElement => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleSetValue = (_event: any, editor: any) => {
    setValue('description', editor.getData() || '');
  };

  const handleGetValue = (editor: any) => {
    editor.setData(
      getValues('description') ? getValues('description') : ''
    );
  };

  return (
    <div className="xs:w-[99%] md:w-full">
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
