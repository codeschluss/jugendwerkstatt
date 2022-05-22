import React, {useContext} from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import I from "../../ui/IconWrapper";
import { Link, useLocation } from "react-router-dom";
import { TemplateEntity, useGetTemplatesQuery, useGetUserTemplatesQuery, UserTemplateEntity } from "../../../GraphQl/graphql";
import AuthContext from "../../../contexts/AuthContext";

const Templates: React.FC = () => {
    const location = useLocation();
    const { templateType }: any = location.state;

    const templatesResult = useGetTemplatesQuery({
        variables: {
          id: templateType.id
        },
        fetchPolicy: 'network-only'
    });
    
    const fetchedTemplates: [TemplateEntity] = templatesResult.data?.getTemplates?.result as [TemplateEntity];

    const { theUser } = useContext(AuthContext);

    const userTemplatesResult = useGetUserTemplatesQuery({
      skip: !theUser.id ? true : false,
      variables: {
        id: theUser.id
      },
      fetchPolicy: 'network-only'
    });

    const fetchedUserTemplates: [UserTemplateEntity] = userTemplatesResult.data?.getUserTemplates?.result as [UserTemplateEntity];
  
  return (
    <div className="container mx-auto px-4 pt-4">
        <h5 className="text-2xl font-bold">{templateType.name}</h5>
        <h5 className="text-xl font-bold pt-4">Vorlagen</h5>
        <ul className="list-none text-base font-normal pl-4 text-gray-600">
        {
          fetchedTemplates?.map((template, index) => {
            return (
              <li className="pt-4" key={index}>
                <Link
                  to={{
                    pathname: `/Forms/Templates/Edit/${template.id}`
                }}
                state= {{
                    templateType: templateType.name,
                    name: template.name,
                    templateTypeId: templateType.id,
                    edit: false,
                }}
                >
                  {template.name}
                  <I className="h-5 float-right">
                    <ChevronRightIcon />
                  </I>
                </Link>
              </li>
            )
          })
        }
        </ul>
        <h5 className="text-xl font-bold pt-4">
            Eigene {templateType.name}
        </h5>
        <ul className="list-none text-base font-normal pl-4 text-gray-600">
            {
            fetchedUserTemplates?.map((template, index) => {
                return (
                <li className="pt-4" key={index}>
                    <Link
                    to={{
                        pathname: `/Forms/Templates/Edit/${template.id}`
                    }}
                    state= {{
                        templateType: templateType.name,
                        name: template.name,
                        templateTypeId: templateType.id,
                        edit: true,
                    }}
                    >
                    {template.name}
                    <I className="h-5 float-right">
                        <ChevronRightIcon />
                    </I>
                    </Link>
                </li>
                )
            })
            }
        </ul>
    </div>
  );
};

export default Templates;
