import { ports } from '@datr.tech/leith-config-api-ports';

export const procServiceGetProcess = async ({ processId }) => {
  const serviceName = 'proc';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/process/${processId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let proc;

  if (json && typeof json['process'] !== 'undefined') {
    proc = json['process'];
  }

  return proc;
};
