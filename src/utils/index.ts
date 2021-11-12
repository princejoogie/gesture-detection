import * as handpose from "@tensorflow-models/handpose";

const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

const style: Record<number, { color: string; size: number }> = {
  0: { color: "#F59E0B", size: 15 },
  1: { color: "#FBBF24", size: 6 },
  2: { color: "#059669", size: 10 },
  3: { color: "#FBBF24", size: 6 },
  4: { color: "#FBBF24", size: 6 },
  5: { color: "#8B5CF6", size: 10 },
  6: { color: "#FBBF24", size: 6 },
  7: { color: "#FBBF24", size: 6 },
  8: { color: "#FBBF24", size: 6 },
  9: { color: "#3B82F6", size: 10 },
  10: { color: "#FBBF24", size: 6 },
  11: { color: "#FBBF24", size: 6 },
  12: { color: "#FBBF24", size: 6 },
  13: { color: "#EF4444", size: 10 },
  14: { color: "#FBBF24", size: 6 },
  15: { color: "#FBBF24", size: 6 },
  16: { color: "#FBBF24", size: 6 },
  17: { color: "#EC4899", size: 10 },
  18: { color: "#FBBF24", size: 6 },
  19: { color: "#FBBF24", size: 6 },
  20: { color: "#FBBF24", size: 6 },
};

export const drawHand = (
  predictions: handpose.AnnotatedPrediction[],
  ctx: CanvasRenderingContext2D
) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;

      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        const finger = Object.keys(fingerJoints)[
          j
        ] as keyof typeof fingerJoints;
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "#FFFFFFCC";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      for (let i = 0; i < landmarks.length; i++) {
        const x = landmarks[i][0];
        const y = landmarks[i][1];
        ctx.beginPath();
        ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

        ctx.fillStyle = style[i]["color"];
        ctx.fill();
      }
    });
  }
};
