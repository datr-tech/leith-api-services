import { MethodEnum } from '@app-lcs/config';
import { Types } from 'mongoose';

export interface IGenerateServiceUrlInput {
  id: Types.ObjectId;
  methodEnum: MethodEnum;
  serviceEnum: ServicesEnum;
  host?: string;
  version?: number;
}
