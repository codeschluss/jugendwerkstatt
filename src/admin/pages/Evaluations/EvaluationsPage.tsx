import { ReactElement } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { evaluationLabels, options } from '../../static/chart';
import { Button, Panel } from '../../components/atoms';
import { ButtonVariantsEnum } from '../../interfaces/enums/ButtonVariants.enum';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: evaluationLabels,
  datasets: [
    {
      label: 'Evaluierung Jugendwerkstatt',
      data: [3, 1, 2, 0, 3, 1, 2, 0, 3, 3, 3, 1, 4, 6, 10, 2, 1, 2, 3, 4, 5, 6],
      borderColor: 'rgba(193, 0, 58, 1)',
      backgroundColor: 'rgba(193, 0, 58, 1)',
    },
  ],
};

const EvaluationsPage = (): ReactElement => (
  <>
    <div className="flex max-w-5xl md:space-x-5 xs:flex-col md:flex-row">
      <Panel
        title="Evaluierung Jugendwerkstatt"
        className="flex-1"
        submitButton={false}
      >
        <Panel.Body>
          <Line options={options} data={data} />
        </Panel.Body>
      </Panel>

      <div className="flex flex-col mx-5 space-y-5 xs:mt-5 md:mt-0">
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
    </div>

    <Panel
      title="Kommentare"
      className="max-w-[50.6rem] mt-5"
      submitButton={false}
    >
      <Panel.Body>
        <div className="p-2 my-2 border border-gray-400">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quis
            deserunt modi explicabo veritatis nisi quod eos velit aspernatur
            nulla minima eum autem quia similique, reiciendis quaerat placeat
            tempore harum?
          </h1>
        </div>

        <div className="p-2 my-2 border border-gray-400">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quis
            deserunt modi explicabo veritatis nisi quod eos velit aspernatur
            nulla minima eum autem quia similique, reiciendis quaerat placeat
            tempore harum?
          </h1>
        </div>

        <div className="p-2 my-2 border border-gray-400">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quis
            deserunt modi explicabo veritatis nisi quod eos velit aspernatur
            nulla minima eum autem quia similique, reiciendis quaerat placeat
            tempore harum?
          </h1>
        </div>
      </Panel.Body>
    </Panel>
  </>
);

export default EvaluationsPage;
