import { ports } from '@freight/common-api-ports-config';

export const entityServiceGetService = async ({ serviceId }) => {
  const serviceName = 'entity';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/service/${serviceId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let service;

  if (json && typeof json['service'] !== 'undefined') {
    service = json['service'];
  }

  return service;
};
