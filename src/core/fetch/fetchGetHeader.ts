import { IFetchGetHeader } from '@app-lcs/interfaces/core/fetch';

export const fetchGetHeader: IFetchGetHeader = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};
