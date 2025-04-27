import { userFormData } from '../interfaces/formData.interface';

export const activityConfig = {
  push_ups: {
    MET: 8.0,
    calculate: (formData: userFormData) => {
      const totalReps = formData.reps! * formData.sets!;
      const weight = formData.kg!;
      const timeInMinutes = (totalReps * 3) / 60;

      const calories = (8.0 * 3.5 * weight * timeInMinutes) / 200;

      return {
        totalReps: totalReps,
        burnedCalories: parseFloat(calories.toFixed(2)),
        activityName: 'Push ups',
      };
    },
  },

  bodyweight_squats: {
    MET: 6.0,
    calculate: (formData: userFormData) => {
      const totalReps = formData.reps! * formData.sets!;
      const weight = formData.kg!;

      const timeInMinutes = (totalReps * 2.5) / 60;

      const calories = (6.0 * 3.5 * weight * timeInMinutes) / 200;

      return {
        totalReps: totalReps,
        burnedCalories: parseFloat(calories.toFixed(2)),
        activityName: 'Bodyweight Squats',
      };
    },
  },

  pull_up: {
    MET: 9.0,
    calculate: (formData: userFormData) => {
      const totalReps = formData.reps! * formData.sets!;
      const weight = formData.kg!;
      const timeInMinutes = (totalReps * 4) / 60;

      const calories = (9.0 * 3.5 * weight * timeInMinutes) / 200;

      return {
        totalReps: totalReps,
        burnedCalories: parseFloat(calories.toFixed(2)),
        activityName: 'Pull ups',
      };
    },
  },

  morning_run: {
    calculate: (formData: userFormData) => {
      let time = formData.time!;

      const timeInHours = formData.timeUnit === 'MINUTE' ? time / 60 : time;
      const timeInMinutes = formData.timeUnit === 'HOUR' ? time * 60 : time;

      const speed = formData.distance! / timeInHours || timeInMinutes;

      let MET = 0;

      if (speed < 8) {
        MET = 8.0; // მსუბუქი
      } else if (speed < 10) {
        MET = 9.8; // საშუალო
      } else {
        MET = 11.5; // მაქსიმალური
      }

      const burnedCalories = (MET * 3.5 * formData.kg! * timeInMinutes) / 200;

      return {
        speed: speed,
        burnedCalories: burnedCalories,
        MET: MET === 8.0 ? 'Light' : MET === 9.8 ? 'Moderate' : 'Vigorous',
        activityName: 'Morning Run',
        time: `${formData.time} ${formData.timeUnit}`,
        distance: Number(formData.distance),
        unit: formData.unit,
      };
    },
  },

  cycling: {
    calculate: (formData: userFormData) => {
      let time = formData.time!;

      const timeInHours = formData.timeUnit === 'MINUTE' ? time / 60 : time;
      const timeInMinutes = formData.timeUnit === 'HOUR' ? time * 60 : time;

      const speed = formData.distance! / timeInHours || timeInMinutes;

      let MET = 0;

      if (speed < 16) {
        MET = 4.0; // მსუბუქი
      } else if (speed < 20) {
        MET = 6.8; // საშუალო
      } else {
        MET = 8.0; // მაქსიმალური
      }

      const burnedCaloreis = (MET * 3.5 * formData.kg! * timeInMinutes) / 200;

      return {
        speed: speed,
        burnedCaloreis: burnedCaloreis,
        MET: MET === 8.0 ? 'Light' : MET === 9.8 ? 'Moderate' : 'Vigorous',
        activityName: 'Cycling',
        time: `${formData.time} ${formData.timeUnit}`,
        distance: Number(formData.distance),
        unit: formData.unit,
      };
    },
  },

  plank_hold: {
    MET: 4.0, // სტატიკური MAGIC რიცხვი
    calculate: (formData: userFormData) => {
      const timeInMinutes =
        formData.timeUnit === 'HOUR' ? formData.time! * 60 : formData.time!;

      const caloriesBurned =
        (activityConfig.plank_hold.MET * 3.5 * formData.kg! * timeInMinutes) /
        200;

      return {
        burnedCalories: caloriesBurned,
        time: `${formData.time} ${formData.timeUnit}`,
        activityName: 'Plank Hold',
      };
    },
  },
};

export function calculate(distance?: number, time?: number) {}

export type ActivityType = keyof typeof activityConfig;
