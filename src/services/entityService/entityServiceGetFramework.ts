import { ports } from '@freight/common-api-ports-config';

export const entityServiceGetFramework = async ({ frameworkId }) => {
  const serviceName = 'entity';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/framework/${frameworkId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let framework;

  if (json && typeof json['framework'] !== 'undefined') {
    framework = json['framework'];
  }

  return framework;
};
