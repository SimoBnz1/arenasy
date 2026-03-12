import { useState } from "react";

export default function Form({ tournament, addParticipant, setInscreer }) {
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        avatar: ""
    });


    return (<form
        onSubmit={(e) => {
            e.preventDefault();

            const newParticipant = {
                id: Date.now(),
                name: formData.name,
                status: formData.status,
                avatar: `https://i.pravatar.cc/150?u=${formData.name}`
            };

            addParticipant(tournament.id, newParticipant);

            setFormData({ name: "", status: "" });
            setInscreer(false);
        }}
        className="mt-4 bg-white p-4 rounded-xl shadow"
    >
        <input
            type="text"
            placeholder="Nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
            required
        />

        <input
            type="text"
            placeholder="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
            required
        />
        <button
            type="submit"
            disabled={formData.name.length < 3}
            className="w-full py-2 mt-2 bg-indigo-600 text-white rounded-xl disabled:bg-gray-400"
        >
            Ajouter Participant
        </button>
    </form>
    );
}