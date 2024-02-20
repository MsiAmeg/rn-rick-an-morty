import {FilterCharacter} from '../types/gql';

export type filtersDataT = {
  id: Required<keyof FilterCharacter>;
  title: string;
  data: {
    id: number;
    title: string;
  }[];
}[];

export const filtersData: filtersDataT = [
  {
    id: 'status',
    title: 'Status',
    data: [
      {id: 1, title: 'Alive'},
      {id: 2, title: 'Dead'},
      {id: 3, title: 'Unknown'},
    ],
  },
  {
    id: 'gender',
    title: 'Gender',
    data: [
      {id: 1, title: 'Female'},
      {id: 2, title: 'Male'},
      {id: 3, title: 'Genderless'},
      {id: 4, title: 'Unknown'},
    ],
  },
];
