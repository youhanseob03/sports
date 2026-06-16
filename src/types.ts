/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Screen = 'dashboard' | 'activity' | 'profile' | 'sleep' | 'log';

export interface VitalData {
  steps: number;
  stepsGoal: number;
  calories: number;
  caloriesGoal: number;
  distance: number;
  sleepTime: string; // e.g. "7시간 20분"
  sleepQuality: number; // 0-100
}
