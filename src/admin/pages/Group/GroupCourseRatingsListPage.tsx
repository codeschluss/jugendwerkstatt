import { Panel, Button } from '../../components/atoms';
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
import { labels, options } from '../../static/chart';
import { ButtonVariantsEnum } from '../../interfaces/enums/ButtonVariants.enum';
import { useParams } from 'react-router-dom';
import { capitalize } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GroupCourseRatingsListPage = () => {
  const { id } = useParams();
  const capitalizedId = capitalize(id || '');

  return (
    <div className="flex max-w-5xl md:space-x-5 xs:flex-col md:flex-row">
      <Panel
        title={`Kursbewertung ${capitalizedId}`}
        className="flex-1"
        submitButton={false}
      >
        <Panel.Body>
          <Line
            options={options}
            data={{
              labels,
              datasets: [
                {
                  label: `Kursbewertung ${capitalizedId}`,
                  data: [3, 1, 2, 0, 3, 1, 2, 0, 3, 3, 3, 1],
                  borderColor: 'rgba(193, 0, 58, 1)',
                  backgroundColor: 'rgba(193, 0, 58, 1)',
                },
              ],
            }}
          />
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
  );
};

export default GroupCourseRatingsListPage;
