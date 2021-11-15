import fp from "../../local_modules/fingerpose";

export const _fistBumpGesture = new fp.GestureDescription("fist_bump");

_fistBumpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.9);
_fistBumpGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_fistBumpGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_fistBumpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.9);
_fistBumpGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_fistBumpGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_fistBumpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.9);
_fistBumpGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpLeft,
  0.9
);
_fistBumpGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpRight,
  0.9
);

_fistBumpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.9);
_fistBumpGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.VerticalUp,
  0.9
);

_fistBumpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.9);
_fistBumpGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.VerticalUp,
  0.9
);
