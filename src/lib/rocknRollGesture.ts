import fp from "../../local_modules/fingerpose";

export const _rockNRollGesture = new fp.GestureDescription("rock_n_roll");

_rockNRollGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
_rockNRollGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.VerticalUp,
  1.0
);

_rockNRollGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
_rockNRollGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.9);

_rockNRollGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
_rockNRollGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.9);

_rockNRollGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
_rockNRollGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.VerticalUp,
  1.0
);

_rockNRollGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.9);
_rockNRollGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
