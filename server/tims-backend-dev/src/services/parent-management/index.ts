import featureRoutes from './parent/parentroutes';
import { DataLoader } from './DataLoader';

export default [...featureRoutes];

export const ParentMngDataLoader = new DataLoader();
