export default function ParticipantCard({ user }) {
  if (!user) return null; 
  const isConfirmed = user.status === "Confirmed";

  return (
    <div className={` rounded-[1.5rem] flex  justify-between border w-full ${
      isConfirmed ? `bg-[#F0FFF4] border-[#C6F6D5]` : 'bg-[#FFF9F2] border-[#FEEBC8]'
    }`}>
      <div className="flex bg-  items-center gap-3">
        <img src={user.avatar} className="w-12 h-12  rounded-full border-2 border-white" alt={user.name} />
        <span className="font-bold text-[#1E2191] text-xs uppercase  py-1">
          {user.name}
        </span>
      </div>
      <div className={` rounded-full text-[9px] ml-0 mt-14 font-black uppercase ${
        isConfirmed ? 'bg-[#BAFFD3] text-[#00A344]' : 'bg-[#FFE2C2] text-[#B45309]'
      }`}>
        {user.status}
      </div>
    </div>
  );
}
