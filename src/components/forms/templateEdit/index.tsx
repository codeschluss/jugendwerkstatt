import React, { useState } from "react";
import PencilIcon from "@heroicons/react/outline/PencilIcon";
import SaveIcon from "@heroicons/react/outline/SaveIcon";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import I from "../../ui/IconWrapper";
import { useLocation } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const TemplateEdit: React.FC = () => {
    const location = useLocation();
    const { templateType, name }: any = location.state;

    const [templateName, setTemplateName] = useState(name)
    const [content, setContent] = useState('');
    const [editName, setEditName] = useState(false);

    const handleClick = (): void =>  {
        setEditName(true);
    }

    const handleChange = (event: any): void => {
        setTemplateName(event.target.value)
    }

    return (
        <div className="container mx-auto px-4 pt-4">
            <h5 className="text-2xl font-bold">{templateType}</h5>
            <h5 className="text-xl font-normal pt-4">
                {
                    editName ? <input type="text" className="border-b-2 border-black focus-visible:outline-none focus:outline-none" value={templateName} onChange={handleChange} /> : templateName
                }
                <I className="h-5 float-right opacity-70">
                    <DownloadIcon />
                </I>
                <I className="h-5 float-right">
                    <SaveIcon />
                </I>
                <I className="h-5 float-right" onClick={handleClick}>
                    <PencilIcon /> 
                </I>
            </h5>

            <div className="pt-4">
                <CKEditor
                    editor={ ClassicEditor }
                    data={content}
                    onChange={ ( event: any, editor: any ) => {
                        const data = editor.getData(); 
                        setContent(data);
                    } }
                />
            </div>
           
        </div>
    )
}

export default TemplateEdit;