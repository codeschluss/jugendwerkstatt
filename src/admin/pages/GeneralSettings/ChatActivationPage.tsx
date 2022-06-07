import { ReactElement } from 'react';
import { Panel, Switch } from '../../components/atoms';

const ChatActivationPage = (): ReactElement => {
  /**
   * handlers
   */
  const handleChatActivation = (value: boolean) => {
    console.log(
      value ? 'Sending request... -> Enabled' : 'Sending request... -> Disabled'
    );
  };

  return (
    <Panel title="Chat Aktivierung" submitButton={false} className="max-w-md">
      <Panel.Body className="flex items-center justify-between mb-0 mt-14">
        <p>Chat Aktivierung</p>
        <Switch onSwitch={handleChatActivation} />
      </Panel.Body>
    </Panel>
  );
};

export default ChatActivationPage;
