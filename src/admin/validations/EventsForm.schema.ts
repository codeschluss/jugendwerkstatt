import Joi from 'joi';
import { validateMethod } from '../utils';
import { AddressFormSchema } from './AddressForm.schema';
import { EventBaseDataFormSchema } from './EventBaseDataForm.schema';
import { ScheduleFormSchema } from './ScheduleForm.schema';

const FileSchema = Joi.object({
  file: Joi.alternatives()
    .try(
      Joi.custom(
        (value, helpers) =>
          validateMethod(
            value,
            1,
            ['image/png', 'image/jpg', 'image/jpeg'],
            helpers
          ),
        'file-validate'
      )
    )
    .messages({
      'any.fileSize':
        'The maximum file size that can be uploaded as an image is 5 MB.',
      'any.fileType':
        'Sorry, is invalid, allowed extensions are: png, jpg, jepg',
    }),
});

export const EventsFormSchema = Joi.object({
  address: AddressFormSchema,
  baseData: EventBaseDataFormSchema,
  description: Joi.string().required().label('Beschreibung'),
  schedule: ScheduleFormSchema,
  files: Joi.array().min(1).items(FileSchema),
});

export const OrganizerFormSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().label('Veranstalter Name'),
  phone: Joi.string().required().label('Telefonnummer'),
  website: Joi.string().uri().optional().label('Webseite'),
  mail: Joi.string().email({ tlds: false }).label('E-Mail-Adresse'),
});

export const CategoryFormSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().label('Kategoriename'),
});
