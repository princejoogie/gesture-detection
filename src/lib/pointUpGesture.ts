import fp from "../../local_modules/fingerpose";

export const _pointUpGesture = new fp.GestureDescription("point_up");

_pointUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
_pointUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.9);

_pointUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
_pointUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.9);

_pointUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
_pointUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.9);

_pointUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
_pointUpGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.VerticalUp,
  1.0
);

_pointUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.9);
_pointUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
