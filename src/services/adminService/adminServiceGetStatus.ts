import { ports } from '@freight/common-api-ports-config';
import { IAdminServiceGetStatus } from '@app/interfaces/adminService';

export const adminServiceGetStatus: IAdminServiceGetStatus = async ({ statusId }) => {
  const serviceName = 'admin';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/status/${statusId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let stat;

  if (json && typeof json['status'] !== 'undefined') {
    stat = json['status'];
  }

  return stat;
};
