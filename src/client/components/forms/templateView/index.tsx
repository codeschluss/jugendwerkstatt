import React from "react";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import I from "../../../../shared/components/ui/IconWrapper";
import { useLocation } from "react-router-dom";
import { Capacitor } from "@capacitor/core";

const TemplateView: React.FC = () => {
  const location = useLocation();
  const { templateType, name, content }: any = location.state;
  const device = Capacitor.getPlatform(); // -> 'web', 'ios' or 'android'

  return (
    <div className="container mx-auto px-4 pt-4">
      <h5 className="text-2xl font-bold">{templateType}</h5>
      <h5 className="text-xl font-normal pt-4">
        {name}
        <I className="h-5 float-right opacity-70">
          <DownloadIcon />
        </I>
      </h5>

      <div className="pt-4">{content}</div>
    </div>
  );
};

export default TemplateView;
