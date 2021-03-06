import { PlusCircleIcon } from '@heroicons/react/outline';
import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { SortOver, SortEvent } from 'react-sortable-hoc';
import { Button, DragItem, DragList, ListItem } from '../../atoms';
import { InputField } from '../../molecules';

import { EvaluationQuestionListProps } from './EvaluationQuestionList.types';

export const EvaluationQuestionList = ({
  error,
  errors,
  clearErrors,
  control,
  register,
}: EvaluationQuestionListProps) => {
  const { fields, append, remove, move } = useFieldArray({
    name: 'questions',
    control,
  });

  // handlers
  const handleAddNew = () => {
    append({ name: '' });
    clearErrors('questions');
  };

  const handleOnSortEnd = useCallback(
    ({ oldIndex, newIndex }: SortOver, _event: SortEvent) =>
      move(oldIndex, newIndex),
    [move]
  );

  const handleOnDelete = (id: number) => () => remove(id);

  return (
    <>
      <DragList
        axis="y"
        lockAxis="y"
        useDragHandle
        lockToContainerEdges
        lockOffset={['0%', '0%']}
        onSortOver={handleOnSortEnd}
        className="mb-3"
      >
        {fields.map((_question, index) => (
          <DragItem key={index} index={index}>
            <InputField
              {...register(`questions.${index}.name`)}
              error={errors?.[index]?.name?.message}
            />
            <ListItem onDelete={handleOnDelete(index)} />
          </DragItem>
        ))}
      </DragList>
      <div className="flex items-center gap-x-4">
        <Button
          iconOnly
          type="button"
          onClick={handleAddNew}
          iconLeft={<PlusCircleIcon />}
        />
        {error && <p className="text-primary">{error.message}</p>}
      </div>
    </>
  );
};
