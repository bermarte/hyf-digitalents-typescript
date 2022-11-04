import { Howl } from "howler";

export const beep1: string = "./audio/piano-a_A_major.wav";
export const beep2: string = "./audio/piano-b_B_major.wav";
export const beep3: string = "./audio/piano-c_C_major.wav";
export const beep4: string = "./audio/piano-d_D_major.wav";
export const fail: string = "./audio/fail-crash_F_major.wav";

export const playSound = (src: string): void => {
  const sound = new Howl({
    src,
  });
  sound.play();
};
