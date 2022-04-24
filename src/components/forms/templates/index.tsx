import React from "react";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import I from "../../ui/IconWrapper";
import { Link, useLocation } from "react-router-dom";

const Templates: React.FC = () => {
    const location = useLocation();
    const { templateType }: any = location.state;

  return (
    <div className="container mx-auto px-4 pt-4">
        <h5 className="text-2xl font-bold">{templateType.name}</h5>
        <h5 className="text-xl font-bold pt-4">Vorlagen</h5>
        <ul className="list-none text-base font-normal pl-4 text-gray-600">
            <li className="pt-4">
            Vorlage 1
            <I className="h-5 float-right">
                <ChevronRightIcon />
            </I>
            </li>
            <li className="pt-4">
            <Link
                to="/Forms/Templates"
            >
                Vorlage 2
                <I className="h-5 float-right">
                <ChevronRightIcon />
                </I>
            </Link>
            </li>
            <li className="pt-4">
                Vorlage 3
            <I className="h-5 float-right">
                <ChevronRightIcon />
            </I>
            </li>
        </ul>
        <h5 className="text-xl font-bold pt-4">
            Eigene {templateType.name}
        </h5>
        <ul className="list-none text-base font-normal pl-4 text-gray-600">
            <li className="pt-4">
            <Link
                to={{
                    pathname: "/Forms/Templates/Edit/1"
                }}
                state= {{
                    templateType: templateType.name,
                    name: 'Firma 1'
                }}
            >
                Firma 1
                <I className="h-5 float-right">
                <ChevronRightIcon />
                </I>
            </Link>
            </li>
            <li className="pt-4">
                Firma 2
            <I className="h-5 float-right">
                <ChevronRightIcon />
            </I>
            </li>
            <li className="pt-4">
                Firma 2
            <I className="h-5 float-right">
                <ChevronRightIcon />
            </I>
            </li>
        </ul>
    </div>
  );
};

export default Templates;
