import { ports } from '@datr.tech/leith-config-api-ports';

export const dolomiteServiceGetJourney = async ({ journeyId }) => {
  const serviceName = 'dolomite';
  const port = ports[serviceName];
  const uri = `http://localhost:${port}/${serviceName}/api/v1/journey/${journeyId}`;

  const response = await fetch(uri, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Response journey: ${JSON.stringify(response)}`);
  }

  const json = await response.json();
  let journey;

  if (json && typeof json['journey'] !== 'undefined') {
    journey = json['journey'];
  }

  return journey;
};
