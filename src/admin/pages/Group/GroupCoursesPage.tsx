import { ReactElement } from 'react';
import * as qs from 'query-string';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetGroupCoursesQuery } from '../../../GraphQl/graphql';
import { Button, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';
import { ButtonVariantsEnum } from '../../interfaces/enums/ButtonVariants.enum';

const GroupCoursesPage = (): ReactElement => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryString = qs.parse(search);
  const { id } = useParams();
  const { data: { group = null } = {} } = useGetGroupCoursesQuery({
    variables: {
      entity: { id },
      year: queryString.year ? Number(queryString.year) : 0,
    },
  });

  const handleYearFilter = (year: string | number) => () =>
    navigate(year === 'Alle Jahre' ? `` : `?year=${year}`);

  const groupCourses = group?.courses || [];

  return (
    <div className="flex flex-col max-w-5xl gap-x-5 md:flex-row">
      <div className="flex-1 p-10 bg-white ">
        <CustomTable
          headerData={[`Kurs - ${group?.name}`, 'Bewertung Ø']}
          bodyData={groupCourses.map((group) => (
            <Table.Row key={group?.id}>
              <Table.Data>{group?.name}</Table.Data>
              <Table.Data>{group?.averageRating}</Table.Data>
            </Table.Row>
          ))}
        />
      </div>
      <div className="flex flex-col mx-5 space-y-5 xs:mt-5 md:mt-0">
        <Panel
          title="Jahr"
          className="flex flex-col space-y-5"
          submitButton={false}
        >
          {[2022, 2023, 2024, 'Alle Jahre'].map((label, idx) => (
            <Button
              key={label}
              {...((Number(queryString.year) === Number(label) ||
                idx === 3) && {
                variant: ButtonVariantsEnum.SECONDARY,
              })}
              onClick={handleYearFilter(label)}
              className="w-fit"
            >
              {label}
            </Button>
          ))}
        </Panel>
      </div>
    </div>
  );
};

export default GroupCoursesPage;
