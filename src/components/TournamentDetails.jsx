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

  {/* Tournament Card */}
  <div className="px-6 mt-6">

    <div className="bg-gradient-to-br from-indigo-500 to-blue-400 p-6 rounded-3xl text-white shadow-lg">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-sm opacity-80">
            {tournament.sport}
          </p>

          <h2 className="text-2xl font-bold leading-tight">
            {tournament.title}
          </h2>
        </div>

        <span className="bg-green-200 text-green-700 px-4 py-1 rounded-full text-xs font-semibold">
          {tournament.status}
        </span>

      </div>

      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <span className="bg-white/20 px-3 py-1 rounded-full">
          👥 {tournament.participantsCount}
        </span>

        <span className="bg-white/20 px-3 py-1 rounded-full">
          🏆 {tournament.format}
        </span>

        <span className="bg-white/20 px-3 py-1 rounded-full">
          📅 {tournament.date}
        </span>

        <span className="bg-white/20 px-3 py-1 rounded-full">
          📍 {tournament.location}
        </span>

      </div>

    </div>
  </div>

  {/* Bottom Section */}
  <div className="bg-gray-100 mt-8 rounded-t-[2.5rem] p-6 min-h-[60vh]">

    <div className="flex gap-6 text-gray-500 font-medium border-b pb-3">

      <button className="text-gray-400">
        Info
      </button>

      <button className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
        Participants
      </button>

      <button className="text-gray-400">
        Bracket
      </button>

    </div>

    <h3 className="font-bold mt-6 mb-4">
      Participants List ({tournament.participants.length})
    </h3>

    <div className="grid grid-cols-2 gap-4 mt-4">
      {tournament.participants.map((user) => (
        <ParticipantCard key={user.id} user={user} />
      ))}
    </div>

  </div>

</div>
  );
}
