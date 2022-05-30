import { FC, useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { AccordionProps, AccordionComposition } from './Accordion.props';
import { If } from '../../../shared/components/If/If';

const Accordion: FC<AccordionProps> & AccordionComposition = ({
  title,
  children,
  ...rest
}) => {
  /**
   * local state
   */
  const [showAccordionContent, setShowAccordionContent] = useState(false);

  /**
   * handlers
   */
  const handleAccordionContent = () =>
    setShowAccordionContent(!showAccordionContent);

  return (
    <div
      role="button"
      onClick={handleAccordionContent}
      className="p-4 bg-white rounded-sm"
      {...rest}
    >
      {title}
      <If condition={showAccordionContent}>
        <div className="mt-8">{children}</div>
      </If>
    </div>
  );
};
Accordion.Item = AccordionItem;

export default Accordion;
