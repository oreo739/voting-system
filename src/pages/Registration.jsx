import React, { useState, useRef } from "react";

const Registration = () => {
  const [images, setImages] = useState([]);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraOpen(true);
      }
    } catch (err) {
      alert("Unable to access camera: " + err.message);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 200, 200);
    canvasRef.current.toBlob((blob) => {
      const file = new File([blob], `photo_${Date.now()}.png`, { type: "image/png" });
      const previewUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, { file, previewUrl }]);
    });
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setCameraOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && images.length < 3) {
      const previewUrl = URL.createObjectURL(file);
      setImages([...images, { file, previewUrl }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length < 3) {
      alert("Please upload or capture at least 3 photos.");
      return;
    }
    alert("Registration complete!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-700">User Registration</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />
          <input type="text" placeholder="Last Name" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />
          <input type="tel" placeholder="Phone Number" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />
          <input type="text" placeholder="State" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />
          <input type="text" placeholder="Pincode" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />
          <input type="password" placeholder="Password" required className="p-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400" />

          <div className="md:col-span-2">
            <label className="block mb-2 text-md font-semibold text-gray-700">Upload 3 Photos (One at a time)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={images.length >= 3}
              className="mb-3 block w-full"
            />

            {!cameraOpen && images.length < 3 && (
              <button
                type="button"
                onClick={openCamera}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                📷 Click Photo
              </button>
            )}

            {cameraOpen && (
              <div className="mt-4">
                <video
                  ref={videoRef}
                  width="200"
                  height="200"
                  className="rounded-xl border-2 border-indigo-500 shadow-lg"
                  autoPlay
                  playsInline
                />
                <canvas ref={canvasRef} width="200" height="200" className="hidden" />
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                  >
                    📸 Capture
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5 flex gap-4 flex-wrap">
              {images.map((imgObj, i) => (
                <img
                  key={i}
                  src={imgObj.previewUrl}
                  alt={`photo_${i}`}
                  onClick={() => setPreviewImage(imgObj.previewUrl)}
                  className="w-20 h-20 object-cover rounded-full border border-purple-400 cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">{images.length} / 3 photos added</p>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-xl border-4 border-white shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Registration;