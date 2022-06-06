// WORK IN PROGRESS
import { ReactElement } from 'react';
import { Button, Panel } from '../../components/atoms';
import { PanelBody } from '../../components/atoms/Panel/PanelBody';
import { InputField } from '../../components/molecules';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { labels, options } from '../../static/chart';
// import { ButtonVariants } from '../../components/atoms/Form/Button/Button.props';
// import { ButtonVariantsEnum } from '../../interfaces/enums/ButtonVariants.enum';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Kursbewertung Holz',
//       data: [3, 1, 2, 0, 3, 1, 2, 0, 3, 3, 3, 1],
//       borderColor: 'rgba(193, 0, 58, 1)',
//       backgroundColor: 'rgba(193, 0, 58, 1)',
//     },
//   ],
// };

const CreateGroupPage = (): ReactElement => (
  <>
    <Panel title="Stammdaten" className="max-w-4xl">
      <PanelBody>
        <InputField label="Gruppenname" />
      </PanelBody>
    </Panel>

    {/* <div className="flex space-x-5">
      <Panel title="Kursbewertung Holz" className="max-w-4xl">
        <Panel.Body className="flex">
          <Line options={options} data={data} />
        </Panel.Body>
      </Panel>

      <div className="flex flex-col mx-5 space-y-5">
        <Panel
          title="Diagrammtyp"
          className="flex flex-col space-y-5"
          submitButton={false}
        >
          <Button variant={ButtonVariantsEnum.SECONDARY}>Balkendiagramm</Button>
          <Button variant={ButtonVariantsEnum.SECONDARY}>Säulendiagramm</Button>
          <Button variant={ButtonVariantsEnum.SECONDARY}>Liniendiagramm</Button>
        </Panel>

        <Panel
          title="Jahr"
          className="flex flex-col space-y-5"
          submitButton={false}
        >
          <Button variant={ButtonVariantsEnum.SECONDARY}>2022</Button>
          <Button variant={ButtonVariantsEnum.SECONDARY}>2023</Button>
          <Button variant={ButtonVariantsEnum.SECONDARY}>2024</Button>
          <Button variant={ButtonVariantsEnum.SECONDARY}>Alle Jahre</Button>
        </Panel>
      </div>
    </div> */}
  </>
);

export default CreateGroupPage;
