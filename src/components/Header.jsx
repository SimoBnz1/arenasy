export default function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 pb-20 rounded-b-[3rem] text-white shadow-lg">
        <div className="max-w-xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-lg opacity-80 font-light">Good Morning,</h1>
            <p className="text-3xl font-bold">Samuel Walker!</p>
          </div>
          <img src="https://i.pravatar.cc/150?u=samuel" className="w-12 h-12 rounded-full border-2 border-white/20 shadow-md" alt="profile" />
        </div>

        <div className="max-w-xl mx-auto mt-8 relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-4 pl-12 rounded-2xl bg-white/20 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all shadow-inner"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60">🔍</span>
        </div>
      </header>
  );
}

