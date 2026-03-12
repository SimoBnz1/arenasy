import { useState } from "react";
import { tournamentData } from './data/tournamentDB';
import TournamentCard from './components/TournamentCard';
import Header from './components/Header';
import TournamentDetails from './components/TournamentDetails';



function App() {

  const [selectedTournament, setSelectedTournament] = useState(null);
  const [search, setSearch] = useState("");
  const [tournaments, setTournaments] = useState(tournamentData);



  return (
    <div className="min-h-screen bg-slate-50">

      {!selectedTournament && <Header search={search} setSearch={setSearch} />}
      <main className=" max-w-xl pb-10">

        {!selectedTournament ? (

          tournaments.filter((t) => t.title.toLowerCase().includes(search.toLowerCase())).map((t) => (
            <TournamentCard
              key={t.id}
              tournament={t}
              onClick={() => setSelectedTournament(t)}
              addParticipant={addParticipant}
            />
          ))

        )
          :
          (
            <TournamentDetails
              tournament={selectedTournament}
              goBack={() => setSelectedTournament(null)}
              addParticipant={addParticipant}
            />

          )}

      </main>

    </div>
  );
}

export default App;
