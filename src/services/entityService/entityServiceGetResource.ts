import { ports } from '@datr.tech/leith-config-api-ports';

export const entityServiceGetResource = async ({ resourceId }) => {
  const serviceName = 'entity';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/resource/${resourceId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let resource;

  if (json && typeof json['resource'] !== 'undefined') {
    resource = json['resource'];
  }

  return resource;
};
