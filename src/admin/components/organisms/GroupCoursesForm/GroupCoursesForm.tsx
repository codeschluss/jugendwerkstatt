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
  control,
  register,
}: GroupCoursesProps) => {
  const { fields, append, remove, move } = useFieldArray({
    name: 'courses',
    control,
  });
  const { setValue, getValues } = useFormContext<GroupCoursesInput>();

  // handlers
  const handleAddNew = () => {
    append({ courseId: '', name: '', isActive: false }, { shouldFocus: true });
  };

  const handleOnSortEnd = useCallback(
    ({ oldIndex, newIndex }: SortOver, _event: SortEvent) =>
      move(oldIndex, newIndex),
    [move]
  );

  const handleOnDelete = (id: number) => () => remove(id);
  const handleApproveCourse = (index: number) => () => {
    if (getValues('courses').some((field) => field.isActive === true)) return;
    setValue(`courses.${index}.isActive`, true, { shouldValidate: true });
  };

  return (
    <>
      <div className="flex flex-col">
        <DragList
          axis="y"
          lockAxis="y"
          useDragHandle
          lockToContainerEdges
          lockOffset={['0%', '0%']}
          onSortOver={handleOnSortEnd}
          className="mb-3"
        >
          {fields.map((course, index) => (
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
          ))}
        </DragList>
        {error && <p className="pb-2 text-primary">{error.message}</p>}
      </div>
      <Button
        iconOnly
        type="button"
        onClick={handleAddNew}
        iconLeft={<PlusCircleIcon />}
      />
    </>
  );
};
