export const calculateRipCurrentLevel = score => score >= 80 ? 'danger' : score >= 55 ? 'alert' : score >= 30 ? 'caution' : 'safe';
