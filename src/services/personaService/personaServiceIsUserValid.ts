import { ports } from '@freight/common-api-ports-config';

export const personaServiceIsUserValid = async ({ userId, isAdmin }) => {
  const serviceName = 'persona';
  const port = ports[serviceName];
  let uri = `http://localhost:${port}/${serviceName}/api/v1/user/${userId}/validity`;

  if (isAdmin) {
    uri += '?admin=true';
  }

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let validity;

  if (json && typeof json['validity'] !== 'undefined') {
    validity = json['validity'];
  }

  return validity;
};
