import React, { useState, useRef } from "react";

const CameraCapture = ({ onCapture }) => {
  const [cameraOpen, setCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraOpen(true);
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        alert("Camera access denied or not available on this device.");
        console.error(err);
      }
    } else {
      alert("Camera not supported in this browser.");
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    canvasRef.current.toBlob((blob) => {
      const file = new File([blob], `photo_${Date.now()}.png`, { type: "image/png" });
      onCapture(file);
    });

    // Stop camera
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setCameraOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      {!cameraOpen && (
        <button
          onClick={openCamera}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          📷 Click Photo
        </button>
      )}

      {cameraOpen && (
        <div className="mt-4">
          <video
            ref={videoRef}
            width="320"
            height="240"
            className="rounded-xl border-2 border-gray-400"
            autoPlay
            playsInline
          />
          <canvas ref={canvasRef} width="320" height="240" className="hidden" />
          <div className="mt-2 text-center">
            <button
              onClick={capturePhoto}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              📸 Capture
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
