import { entityServiceGetFramework } from './entityServiceGetFramework';
import { entityServiceGetResource } from './entityServiceGetResource';
import { entityServiceGetService } from './entityServiceGetService';
import { entityServiceHasFramework } from './entityServiceHasFramework';
import { entityServiceHasResource } from './entityServiceHasResource';
import { entityServiceHasService } from './entityServiceHasService';

export const entityService = {
  getFramework: entityServiceGetFramework,
  getResource: entityServiceGetResource,
  getService: entityServiceGetService,
  hasResource: entityServiceHasResource,
  hasFramework: entityServiceHasFramework,
  hasService: entityServiceHasService,
};
