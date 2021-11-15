import fp from "../../local_modules/fingerpose";

export const _callMeGesture = new fp.GestureDescription("call_me");

_callMeGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
_callMeGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.VerticalUp,
  0.9
);

_callMeGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
_callMeGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_callMeGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_callMeGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
_callMeGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_callMeGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_callMeGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
_callMeGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_callMeGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.HorizontalRight,
  0.9
);

_callMeGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
_callMeGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_callMeGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.HorizontalRight,
  0.9
);
