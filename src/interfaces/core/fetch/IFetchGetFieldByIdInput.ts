import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { Types } from 'mongoose';

export interface IFetchFieldByIdInput {
  id: Types.ObjectId;
  methodEnum: MethodEnum;
  serviceEnum: ServiceEnum;
  targetFieldEnum: TargetFieldEnum;
}
