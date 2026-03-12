import StatusBadge from './StatusBadge';
import { useState } from "react";
import Form from "./RegestrationForm";
export default function TournamentCard({ tournament, onClick, addParticipant }) {
  const [inscreer, setInscreer] = useState(false);
  return (
    <div className='px-6'>
      <div
        className="bg-white rounded-[2rem] shadow-sm p-6 mb-4 mt-8 rounded-xl border border-gray-100 flex flex-col gap-4 cursor-pointer"
      >
        {inscreer && (
          <Form
            tournament={tournament}
            addParticipant={addParticipant}
            setInscreer={setInscreer}
          />
        )}
        <button
          onClick={() => setInscreer(!inscreer)}
          className={`mt-4 px-4 py-2 rounded-lg ${inscreer ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
          {inscreer ? "Se désinscrire" : "S'inscrire"}
        </button>
        <div className="flex items-center gap-4" onClick={onClick}>
          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl border border-gray-100">

            {tournament.sport === "Badminton" ? <i class="fa-solid fa-table-tennis-paddle-ball"></i> : tournament.sport === "Basketball" ? <i class="fa-solid fa-basketball"></i> : <i class="fa-solid fa-fist-raised"></i>}
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
            <span className="text-gray-400"><i class="fa-solid fa-user-group"></i> </span> {tournament.participantsCount} Participants • {tournament.type}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400"><i class="fa-solid fa-calendar-days"></i> </span> {tournament.date}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400"><i class="fa-solid fa-map-pin"></i> </span> {tournament.location}
          </div>
        </div>
      </div>
      <p></p>
    </div>

  );
}

