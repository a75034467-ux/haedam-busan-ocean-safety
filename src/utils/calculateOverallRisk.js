import {calculateSurfingIndex} from './calculateSurfingIndex';
export const calculateOverallRisk = b => Math.round(b.rip*.35 + Math.min(100,b.jelly*1.3)*.25 + Math.min(100,b.wave*45)*.2 + (100-calculateSurfingIndex(b.wave,b.rip).score)*.2);
