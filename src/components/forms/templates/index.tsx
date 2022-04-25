import React from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import I from "../../ui/IconWrapper";
import { Link, useLocation } from "react-router-dom";
import { TemplateEntity, useGetTemplatesQuery, useGetUserTemplatesQuery, UserTemplateEntity } from "../../../GraphQl/graphql";
import jwtDecode from "jwt-decode";

const Templates: React.FC = () => {
    const location = useLocation();
    const { templateType }: any = location.state;

    const templatesResult = useGetTemplatesQuery({
        variables: {
          id: templateType.id
        }
    });
    
    const fetchedTemplates: [TemplateEntity] = templatesResult.data?.getTemplates?.result as [TemplateEntity];

    let accessToken: any;
    let atoken: any;
    if (
        localStorage.getItem("accessToken") &&
        localStorage.getItem("refreshToken")
    ) {
        accessToken = localStorage.getItem("accessToken") || "";
        atoken = jwtDecode(accessToken);
    }

    const userTemplatesResult = useGetUserTemplatesQuery({
        variables: {
            // TODO: Change it to ID
          id: "5852aa11-4e5c-4d8d-bc41-9fa44cb6ca1a"
        }
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
                    pathname: "/Forms/Templates/Edit/1"
                }}
                state= {{
                    templateType: templateType.name,
                    name: template.name,
                    id: template.id
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
                        pathname: "/Forms/Templates/Edit/1"
                    }}
                    state= {{
                        templateType: templateType.name,
                        name: template.name,
                        id: template.id
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
