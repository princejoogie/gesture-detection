import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Switch } from "@headlessui/react";
import { Container, Footer, Navbar } from "./components";
import { _okGesture, _peaceGesture, _raiseGesture } from "./lib";
import * as handpose from "@tensorflow-models/handpose";
import fp from "../local_modules/fingerpose";
import { drawHand } from "./utils";

const gestureEmojis = {
  ok: "👌",
  raise: "✋",
  victory: "✌",
  thumbs_up: "👍",
};

const App: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [enableOverlay, setEnableOverlay] = useState(true);

  // Vars
  const [emoji, setEmoji] = useState<string>("");
  const [confidence, setConfidence] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        if (canvasRef.current && webcamRef.current?.video) {
          webcamRef.current.video.width = width;
          webcamRef.current.video.height = height;
          canvasRef.current.width = width;
          canvasRef.current.height = height;
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const detect = async (net: handpose.HandPose) => {
    try {
      if (webcamRef.current && canvasRef.current && containerRef.current) {
        if (webcamRef.current.video) {
          const video = webcamRef.current.video;
          const hands = await net.estimateHands(video);

          const ctx = canvasRef.current.getContext("2d");
          ctx?.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          if (hands.length > 0) {
            const GE = new fp.GestureEstimator([
              _okGesture,
              _raiseGesture,
              fp.Gestures.VictoryGesture,
              fp.Gestures.ThumbsUpGesture,
            ]);

            const estimate = GE.estimate(hands[0].landmarks, 7);

            if (estimate.gestures.length > 0) {
              const result = estimate.gestures.reduce((p, c) => {
                return p.score > c.score ? p : c;
              });

              setConfidence(result.score);
              setEmoji(
                gestureEmojis[result.name as keyof typeof gestureEmojis]
              );
              if (ctx) drawHand(hands, ctx);
            } else {
              if (emoji !== "") setEmoji("");
            }
          }
        } else throw new Error("Video not found");
      } else throw new Error("Refs not found");
    } catch (err: any) {}
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    (async () => {
      console.log("Loading handpose model...");
      const net = await handpose.load();
      interval = setInterval(async () => await detect(net), 50);
    })();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Container className="flex-1 my-10">
        <main className="flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-300">Video Preview</p>
            </div>

            <div
              ref={containerRef}
              className="w-full relative bg-gray-800 h-[468px] bg-opacity-50 overflow-hidden rounded-lg mt-4 flex items-center justify-center"
            >
              <Webcam
                className="absolute top-0 left-0 h-[468px]"
                ref={webcamRef}
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-300">Prediction</p>

              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-400">Enable stats</p>
                <Switch
                  checked={enableOverlay}
                  onChange={setEnableOverlay}
                  className={`${
                    enableOverlay ? "bg-blue-600" : "bg-gray-800"
                  } relative inline-flex items-center h-5 rounded-full w-9`}
                >
                  <span className="sr-only">Enable stats</span>
                  <span
                    className={`${
                      enableOverlay ? "translate-x-5" : "translate-x-1"
                    } inline-block w-3 h-3 transform bg-gray-300 rounded-full transition-all duration-150`}
                  />
                </Switch>
              </div>
            </div>

            <div className="relative w-full rounded-lg mt-4 h-[468px] bg-gray-800 overflow-hidden bg-opacity-50 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 h-[468px]"
              />

              {enableOverlay && (
                <div className="absolute p-2 font-mono text-xs bg-black rounded left-2 top-2 bg-opacity-20">
                  <p className="font-sans text-3xl">gesture: {emoji}</p>
                  <p>confidence: {(confidence * 10).toFixed(2)}%</p>
                </div>
              )}

              <div className="absolute inset-x-4 bottom-4"></div>
            </div>
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
