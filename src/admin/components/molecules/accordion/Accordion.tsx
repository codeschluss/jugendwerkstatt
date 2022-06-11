import { FC, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { AccordionProps, AccordionComposition } from "./Accordion.props";
import { If } from "../../../../shared/components/If/If";
import { twClsx } from "../../../utils";

export const Accordion: FC<AccordionProps> & AccordionComposition = ({
  title,
  open = false,
  children,
  className,
  showSide,
  sideTitle,
  sideContent,
  sideClassName,
  ...rest
}) => {
  // local state
  const [openAccordion, setOpenAccordion] = useState(open);

  // handlers
  const handleAccordion = () => setOpenAccordion(!openAccordion);

  return (
    <div className="grid md:grid-cols-3 gap-4 my-2 md:my-4">
      <div
        className={twClsx(
          "flex justify-start flex-col bg-white rounded-sm p-4 col-span-2",
          className
        )}
      >
        <h3
          role="button"
          onClick={handleAccordion}
          {...rest}
          className="text-2xl text-charcoal"
        >
          {title}
        </h3>
        <If condition={openAccordion}>
          <div className="mt-4">{children}</div>
        </If>
      </div>
      {showSide && (
        <div className={twClsx("bg-white rounded-sm h-fit", sideClassName)}>
          <h3
            role="button"
            onClick={handleAccordion}
            className="text-2xl text-charcoal"
          >
            {sideTitle}
          </h3>
          <If condition={openAccordion}>{sideContent}</If>
        </div>
      )}
    </div>
  );
};

Accordion.Item = AccordionItem;
