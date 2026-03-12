export default function StatusBadge({ status }) {
  const styles = {
    "On Going": "bg-green-500 text-white",
    "Upcoming": "bg-blue-500 text-white",
    "Pending": "bg-red-400 text-white",
    "Confirmed": "bg-green-100 text-green-700",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${styles[status] || "bg-gray-400"}`}>
      {status}
    </span>
  );
}

