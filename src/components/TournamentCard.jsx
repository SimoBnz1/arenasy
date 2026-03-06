import StatusBadge from './StatusBadge';

export default function TournamentCard({ tournament, onClick }) {
  return (
    <div className='px-6'>
      <div  onClick={onClick}
      className="bg-white rounded-[2rem] shadow-sm p-6 mb-4 mt-8 rounded-xl border border-gray-100 flex flex-col gap-4 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl border border-gray-100">
          {tournament.sport === "Badminton" ? "🏸" : tournament.sport === "Basketball" ? "🏀" : "🥊"}
        </div>
        <div>
          <h3 className="font-extrabold text-gray-800 text-lg leading-tight">{tournament.title}</h3>
          <StatusBadge status={tournament.status} />
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
        {tournament.description}
      </p>

      <div className="grid grid-cols-1 gap-2 pt-4 border-t border-gray-50 text-sm text-gray-600 font-medium">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">👥</span> {tournament.participantsCount} Participants • {tournament.type}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📅</span> {tournament.date}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📍</span> {tournament.location}
        </div>
      </div>
    </div>
    </div>
    
  );
}

