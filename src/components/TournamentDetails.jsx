import ParticipantCard from "./ParticipantRow";

export default function TournamentDetails({ tournament, goBack }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-900">

  {/* Header */}
  <div className="flex items-center justify-between px-6 pt-6 text-white">
    <button
      onClick={goBack}
      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
    >
      ←
    </button>

    <h1 className="font-semibold text-lg">
      Tournament
    </h1>

    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
      🔗
    </div>
  </div>

 

</div>
  );
}
