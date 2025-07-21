import { effect } from '@angular/core';
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

      const speed = formData.distance! / timeInHours;

      let MET = 0;
      let intensity: string = '';

      if (speed < 6) {
        MET = 6.0; // ძალიან მსუბუქი
        intensity = 'Very Light';
      } else if (speed < 8) {
        MET = 8.3; // მსუბუქი
        intensity = 'Light';
      } else if (speed < 10) {
        MET = 10.0; // საშუალო
        intensity = 'Moderate';
      } else if (speed < 12) {
        MET = 11.8; // ენერგიული
        intensity = 'Vigorous';
      } else {
        MET = 14.5; // ძალიან ენერგიული
        intensity = 'Very Vigorous';
      }
      const burnedCalories = (MET * 3.5 * formData.kg! * timeInMinutes) / 200;

      return {
        speed: speed,
        burnedCalories: parseFloat(Math.round(burnedCalories).toFixed(2)),
        MET: intensity,
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

      const speed = formData.distance! / timeInHours;

      let MET = 0;
      let intensity: string = '';

      if (speed < 6) {
        MET = 6.0; // ძალიან მსუბუქი
        intensity = 'Very Light';
      } else if (speed < 8) {
        MET = 8.3; // მსუბუქი
        intensity = 'Light';
      } else if (speed < 10) {
        MET = 10.0; // საშუალო
        intensity = 'Moderate';
      } else if (speed < 12) {
        MET = 11.8; // ენერგიული
        intensity = 'Vigorous';
      } else {
        MET = 14.5; // ძალიან ენერგიული
        intensity = 'Very Vigorous';
      }

      const burnedCalories = (MET * 3.5 * formData.kg! * timeInMinutes) / 200;

      return {
        speed: speed,
        burnedCalories: parseFloat(Math.round(burnedCalories).toFixed(2)),
        MET: intensity,
        activityName: 'Cycling',
        time: `${formData.time} ${formData.timeUnit}`,
        distance: Number(formData.distance),
        unit: formData.unit,
      };
    },
  },

  plank_hold: {
    MET: 4.0,
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

  sparring: {
    calculate(formData: userFormData) {
      const MET =
        formData.effort === 'LIGHT'
          ? 6
          : formData.effort === 'MODERATE'
          ? 6
          : formData.effort === 'MAXIMUM'
          ? 12.8
          : 0;

      const timeInMinutes =
        formData.timeUnit === 'HOUR' ? formData.time! * 60 : formData.time!;

      const weight = formData.kg!;

      const burnedCalories = (MET * 3.5 * weight * timeInMinutes) / 200;

      return {
        burnedCalories: parseFloat(burnedCalories.toFixed(2)),
        activityName: 'Sparring',
        effort: formData.effort,
        time: `${formData.time} ${formData.timeUnit}`,
      };
    },
  },
};

export type ActivityType = keyof typeof activityConfig;
