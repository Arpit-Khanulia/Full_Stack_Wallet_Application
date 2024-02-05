
function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-2xl"><span className="loading loading-infinity loading-lg"></span></div>
    </div>
  );
}

export default Loading;
