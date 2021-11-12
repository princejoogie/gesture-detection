import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Switch } from "@headlessui/react";
import { Container, Footer, Navbar } from "./components";
import { _okGesture, _peaceGesture, _raiseGesture } from "./lib";
import * as handpose from "@tensorflow-models/handpose";
// @ts-nocheck
import * as fp from "fingerpose";
import { drawHand } from "./utils";

const gestureEmojis = ["👌", "✌", "✋"];

const App: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [enableOverlay, setEnableOverlay] = useState(false);

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
          if (hands.length > 0) {
            if (ctx) drawHand(hands, ctx);
          } else {
            ctx?.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );
            console.log("No hands detected");
          }
        } else throw new Error("Video not found");
      } else throw new Error("Refs not found");
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    (async () => {
      console.log("Loading handpose model...");
      const net = await handpose.load();
      interval = setInterval(async () => await detect(net), 100);
    })();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Container className="my-10 flex-1">
        <main className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-300">Video Preview</p>

              <div className="flex items-center space-x-2">
                <p className="text-gray-400 text-xs">Enable stats</p>
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

            <div
              ref={containerRef}
              className="w-full relative bg-gray-800 h-[468px] bg-opacity-50 overflow-hidden rounded-lg mt-4 flex items-center justify-center"
            >
              <Webcam
                className="absolute top-0 left-0 h-[468px]"
                ref={webcamRef}
              />

              {enableOverlay && (
                <div className="absolute left-2 p-2 rounded top-2 text-xs font-mono bg-black bg-opacity-20">
                  <p>gesture: {gestureEmojis[0]}</p>
                  <p>confidence: 92%</p>
                </div>
              )}

              <div className="absolute inset-x-4 bottom-4"></div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div>
              <p className="text-xl text-gray-300">Prediction</p>
            </div>

            <div className="relative w-full rounded-lg mt-4 h-[468px] bg-gray-800 overflow-hidden bg-opacity-50 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 h-[468px]"
              ></canvas>
            </div>
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
