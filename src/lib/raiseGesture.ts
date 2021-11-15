import fp from "../../local_modules/fingerpose";

export const _raiseGesture = new fp.GestureDescription("raise");
_raiseGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
_raiseGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
_raiseGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
_raiseGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
_raiseGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
_raiseGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.VerticalUp,
  1.0
);
_raiseGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
_raiseGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
_raiseGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
_raiseGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
