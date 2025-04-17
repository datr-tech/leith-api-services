import { ports } from '@datr.tech/leith-config-api-ports';

export const procServiceGetThread = async ({ threadId }) => {
  const serviceName = 'proc';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/thread/${threadId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let thread;

  if (json && typeof json['thread'] !== 'undefined') {
    thread = json['thread'];
  }

  return thread;
};
