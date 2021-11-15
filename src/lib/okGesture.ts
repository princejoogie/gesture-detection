import fp from "../../local_modules/fingerpose";

export const _okGesture = new fp.GestureDescription("ok");

_okGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
_okGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);
_okGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpRight,
  1.0
);

_okGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
_okGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);
_okGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpRight,
  1.0
);

_okGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
_okGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);
_okGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpRight,
  1.0
);

_okGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
_okGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);

_okGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
_okGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
