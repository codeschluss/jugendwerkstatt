import { PlusCircleIcon } from '@heroicons/react/outline';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { SortOver, SortEvent } from 'react-sortable-hoc';
import { Button, DragItem, DragList, ListItem } from '../../atoms';
import { InputField } from '../../molecules';
import { GroupCoursesInput, GroupCoursesProps } from './GroupCoursesForm.types';

export const GroupCoursesForm = ({
  error,
  errors,
  clearErrors,
  control,
  register,
}: GroupCoursesProps) => {
  // const { fields, append, remove, move } = useFieldArray({
  //   name: 'courses',
  //   control,
  // });
  // const { setValue, getValues } = useFormContext<GroupCoursesInput>();

  // handlers
  // const handleAddNew = () => {
  //   append({ name: '', isActive: false }, { shouldFocus: true });
  //   // clearErrors('courses');
  // };

  // const handleOnSortEnd = useCallback(
  //   ({ oldIndex, newIndex }: SortOver, _event: SortEvent) =>
  //     move(oldIndex, newIndex),
  //   [move]
  // );

  // const handleOnDelete = (id: number) => () => remove(id);
  // const handleApproveCourse = (index: number) => () => {
  //   getValues('courses').forEach((_, idx) =>
  //     setValue(`courses.${idx}.isActive`, false)
  //   );
  //   setValue(`courses.${index}.isActive`, true, { shouldValidate: true });
  // };

  return (
    <>
      <div className="flex flex-col">
        <DragList
          axis="y"
          lockAxis="y"
          useDragHandle
          lockToContainerEdges
          lockOffset={['0%', '0%']}
          // onSortOver={handleOnSortEnd}
          className="mb-3"
        >
          {/* {fields.map((_course, index) => (
            <DragItem key={index} index={index}>
              <InputField
                {...register(`courses.${index}.name`)}
                error={errors?.[index]?.name?.message}
              />
              <ListItem
                isActive={getValues(`courses.${index}.isActive`)}
                onDelete={handleOnDelete(index)}
                onApprove={handleApproveCourse(index)}
              />
            </DragItem>
          ))} */}
        </DragList>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          iconOnly
          type="button"
          // onClick={handleAddNew}
          iconLeft={<PlusCircleIcon />}
        />
        {error && <p className="text-primary">{error.message}</p>}
      </div>
    </>
  );
};
