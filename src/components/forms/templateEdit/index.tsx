import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useGetTemplateQuery, useGetUserTemplateQuery, useSaveUserTemplateMutation } from "../../../GraphQl/graphql";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import I from "../../ui/IconWrapper";
import AuthContext from "../../../contexts/AuthContext";
import axios from "axios";

const TemplateEdit: React.FC = () => {
    const { id } = useParams();

    const location = useLocation();
    const { templateType, name, templateTypeId, edit }: any = location.state;
    const [templateName, setTemplateName] = useState(name)
    const [templateContent, setTemplateContent] = useState('');
    const [editName, setEditName] = useState(false);

    const { theUser } = useContext(AuthContext);

    const handleClick = (): void => {
        setEditName(true);
    }

    const handleChange = (event: any): void => {
        setTemplateName(event.target.value)
    }

    const [saveUserTemplateMutation, { data, loading, error }] = useSaveUserTemplateMutation({
        variables: {
            name: templateName,
            content: templateContent,
            templateTypeId: templateTypeId,
            templateId: edit ? id : '',
            userId: theUser.id
        },
    });

    const downloadTemplate = (): void => {
        axios.get(`http://localhost:8061/api/media/download/${id}`)
    }

    const saveTemplate = (): void => {
        saveUserTemplateMutation();
    }
    
    const userTemplateResult = useGetUserTemplateQuery({
            skip: !theUser.id ? true : false,
            variables: {id: id!},fetchPolicy: 'network-only'
    });
    const templateResult = useGetTemplateQuery({variables: {id: id!},fetchPolicy: 'network-only'});
   
    const userTemplateContent = userTemplateResult.data?.getUserTemplate?.content;
    const templateContentResult = templateResult.data?.getTemplate?.content;

    useEffect(() => {
        if(edit && userTemplateContent) {
            setTemplateContent(userTemplateContent);
        } else if(!edit && templateContentResult) {
            setTemplateContent(templateContentResult);
        }
    }, [userTemplateContent, templateContentResult])


    return (
        <div className="container mx-auto px-4 pt-4">
            <h5 className="text-2xl font-bold">
                {templateType}

                <I className="h-5 float-right" onClick={downloadTemplate}>
                    <DownloadIcon />
                </I>
            </h5>
            <h5 className="text-xl font-normal pt-4" onClick={handleClick}>
                {
                    editName ? 
                    <input 
                        type="text" 
                        className="border-b-2 border-black focus-visible:outline-none focus:outline-none" 
                        value={templateName} 
                        onChange={handleChange} 
                        /> 
                    : 
                    templateName
                }
            </h5>

            <div className="pt-4 pb-6">
                <CKEditor
                    editor={ ClassicEditor }
                    data={templateContent}
                    onChange={ ( event: any, editor: any ) => {
                        const data = editor.getData(); 
                        setTemplateContent(data);
                    } }
                />
            </div>

            <div className="w-full text-center pt-6">
                <button className="bg-primary text-white mb-2 w-3/4 h-10 rounded-2xl" onClick={saveTemplate}>Speichern</button>
            </div>
           
        </div>
    )
}

export default TemplateEdit;