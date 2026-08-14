// Loader component shown while the page is loading
function Loader() {
  return (
    <div
      id="loader"
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#08428C] flex items-center justify-center">
          <span className="font-poppins font-black text-white text-2xl">ID</span>
        </div>
        <div className="flex gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-[#08428C] animate-bounce"
            style={{ animationDelay: '0s' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-[#08428C] animate-bounce"
            style={{ animationDelay: '0.15s' }}
          />
          <span
            className="w-2 h-2 rounded-full bg-[#08428C] animate-bounce"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
