import { ports } from '@freight/common-api-ports-config';

export const personaServiceGetOrganisation = async ({ organisationId }) => {
  const serviceName = 'persona';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/organisation/${organisationId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let organisation;

  if (json && typeof json['organisation'] !== 'undefined') {
    organisation = json['organisation'];
  }

  return organisation;
};
