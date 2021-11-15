import fp from "../../local_modules/fingerpose";

export const _thumbsUpGesture = new fp.GestureDescription("thumbs_up");
_thumbsUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
_thumbsUpGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_thumbsUpGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_thumbsUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
_thumbsUpGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_thumbsUpGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.HorizontalRight,
  0.9
);

_thumbsUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
_thumbsUpGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_thumbsUpGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.HorizontalRight,
  0.9
);

_thumbsUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
_thumbsUpGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_thumbsUpGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.HorizontalRight,
  0.9
);

_thumbsUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
_thumbsUpGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.HorizontalLeft,
  0.9
);
_thumbsUpGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.HorizontalRight,
  0.9
);
