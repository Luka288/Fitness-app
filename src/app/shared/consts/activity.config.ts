export const activityConfig = {
  morning_run: {
    MET: 9,
    calculate: (distance: number, time: number) => {
      const speed = distance / (time / 60);
      const calories = (speed * 1.5 * 3.5 * time) / 200;
      return { speed, calories };
    },
  },

  push_ups: {
    MET: 8.0,
    calculate: (reps: number, sets: number, time: number) => {
      const totalReps = reps * sets;
      const calories = (8.0 * 3.5 * time) / 200;
      return { totalReps, calories };
    },
  },

  bodyweight_squats: {
    MET: 6.0,
    calculate: (reps: number, sets: number, time: number) => {
      const totalReps = reps * sets;
      const calories = (6.0 * 3.5 * time) / 200;
      return { totalReps, calories };
    },
  },

  pull_up: {
    MET: 9.0,
    calculate: (reps: number, sets: number, time: number) => {
      const totalReps = reps * sets;
      const calories = (9.0 * 3.5 * time) / 200;
      return { totalReps, calories };
    },
  },

  cycling: {
    MET: 7.5,
    calculate: (distance: number, time: number) => {
      const speed = distance / (time / 60);
      const calories = (speed * 1.5 * 3.5 * time) / 200;
      return { speed, calories };
    },
  },
};

export type ActivityType = keyof typeof activityConfig;
