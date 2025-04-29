import { MethodEnum, ServiceEnum, TargetFieldEnum } from '@app-lcs/core/config';
import { Types } from 'mongoose';

export interface IFetchGetFieldByIdInput {
  id: Types.ObjectId;
  methodEnum: MethodEnum;
  serviceEnum: ServiceEnum;
  targetFieldEnum: TargetFieldEnum;
}
