import fp from "../../local_modules/fingerpose";

export const _peaceGesture = new fp.GestureDescription("peace");

_peaceGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
_peaceGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.5);
_peaceGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
_peaceGesture.addDirection(
  fp.Finger.Thumb,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);

// index:
_peaceGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
_peaceGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.VerticalUp,
  0.75
);
_peaceGesture.addDirection(
  fp.Finger.Index,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);

// middle:
_peaceGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
_peaceGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.VerticalUp,
  1.0
);
_peaceGesture.addDirection(
  fp.Finger.Middle,
  fp.FingerDirection.DiagonalUpLeft,
  0.75
);

// ring:
_peaceGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
_peaceGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.2);
_peaceGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);
_peaceGesture.addDirection(
  fp.Finger.Ring,
  fp.FingerDirection.HorizontalLeft,
  0.2
);

// pinky:
_peaceGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
_peaceGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.2);
_peaceGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.DiagonalUpLeft,
  1.0
);
_peaceGesture.addDirection(
  fp.Finger.Pinky,
  fp.FingerDirection.HorizontalLeft,
  0.2
);

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

// call_me: "🤙",

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

// Given these gestures, create a "fist_bump" description:
// [ "Thumb", "No Curl", "Diagonal Up Left", "Diagonal Up Right", 0.9 ]
// [ "Index", "Full Curl", "Diagonal Up Left", "Diagonal Up Right", 0.9 ]
// [ "Middle", "Full Curl", "Diagonal Up Left", "Diagonal Up Right", 0.9 ]
// [ "Ring", "Full Curl", "Vertical Up", 0.9 ]
// [ "Pinky", "Full Curl", "Vertical Up", 0.9 ]

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

// Given these properties, the gesture is:
// [ "Thumb", "No Curl", "Diagonal Up Left" ]
// [ "Index", "Full Curl", "Horizontal Left" ]
// [ "Middle", "Full Curl", "Horizontal Left" ]
// [ "Ring", "Full Curl", "Horizontal Left" ]
// [ "Pinky", "Full Curl", "Horizontal Left" ]

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

// Given these properties, the gesture is: "call_me"
// [ "Thumb", "No Curl", "Vertical Up" ]
// [ "Index", "Full Curl", "Diagonal Up Left", "Diagonal Up Right" ]
// [ "Middle", "Full Curl", "Diagonal Up Left", "Diagonal Up Right" ]
// [ "Ring", "Full Curl", "Horizontal Left", "Horizontal Right" ]
// [ "Pinky", "No Curl", "Horizontal Left", "Horizontal Right" ]
// all with probability 0.9

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
