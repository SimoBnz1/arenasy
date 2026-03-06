import { useState } from "react";
import { tournamentData } from './data/tournamentDB';
import TournamentCard from './components/TournamentCard';
import Header from './components/Header';
import TournamentDetails from './components/TournamentDetails';



function App() {

  const [selectedTournament, setSelectedTournament] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">

      {!selectedTournament && <Header />}
      <main className=" max-w-xl pb-10">

        {!selectedTournament ? (

          tournamentData.map((t) => (
            <TournamentCard
              key={t.id}
              tournament={t}
              onClick={() => setSelectedTournament(t)}
            />
          ))

        ) 
        :
        (
          <TournamentDetails
            tournament={selectedTournament}
            goBack={() => setSelectedTournament(null)}
          />

        )}

      </main>

    </div>
  );
}

export default App;