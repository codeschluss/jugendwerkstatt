export interface EventModel {
  address?: {
    street: string;
    houseNumber: string;
    postalCode: string;
    place: string;
  };
  organizer?: {
    mail: string;
    website: string;
    name: string;
  };
  schedules: {
    startDate: string;
    endDate: string;
  }[];
}
/**
 * 
 * 
 *   street?: string;
  houseNr?: string;
  plz?: string;
  place?: string;
  tel?: string;
  email?: string;
  web?: string;
  group?: string;
  schedule?: any;
  startDate?: string;
  theRest?: string;
  description?: string;
 */
