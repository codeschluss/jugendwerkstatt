import { ReactElement } from 'react';
import {
  useGetSettingsQuery,
  useSaveSettingsMutation,
} from '../../../GraphQl/graphql';
import { If } from '../../../shared/components/If/If';
import { Panel, Switch } from '../../components/atoms';

const ChatActivationPage = (): ReactElement => {
  const { data: { settings = null } = {} } = useGetSettingsQuery();
  const [saveSettings] = useSaveSettingsMutation();

  /**
   * handlers
   */
  const handleChatActivation = (value: boolean) =>
    saveSettings({ variables: { entity: { chatActive: value } } });

  return (
    <Panel title="Chat Aktivierung" submitButton={false} className="max-w-md">
      <Panel.Body className="flex items-center justify-between mb-0 mt-14">
        <p>Chat Aktivierung</p>
        <If condition={!!settings}>
          <Switch
            onSwitch={handleChatActivation}
            enabled={settings?.chatActive as boolean}
          />
        </If>
      </Panel.Body>
    </Panel>
  );
};

export default ChatActivationPage;
