import { ports } from '@datr.tech/leith-config-api-ports';

export const dolomiteServiceGetHop = async ({ hopId }) => {
  const serviceName = 'dolomite';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/hop/${hopId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response hop: ${JSON.stringify(response)}`);
  }

  const json = await response.json();
  let hop;

  if (json && typeof json['hop'] !== 'undefined') {
    hop = json['hop'];
  }

  return hop;
};
