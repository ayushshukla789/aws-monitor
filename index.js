import dotenv from 'dotenv';

import { cpuParams } from './utils/params.js';
import { getMetrics } from './utils/index.js';

dotenv.config();

getMetrics(cpuParams);
