import { MethodEnum, ServiceEnum } from '@app-lcs/core/config';
import { Types } from 'mongoose';

export interface IGenerateServiceUrlInput {
  id: Types.ObjectId;
  methodEnum: MethodEnum;
  serviceEnum: ServiceEnum;
  host?: string;
  version?: number;
}
