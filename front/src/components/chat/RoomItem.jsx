import Avatar from "../avatar/Avatar";

const RoomItem = ({ room, onClick, emotion, userId }) => {
  const getEmotion = () => {
    return "bg-positive-blend";
  };
  const friendInfo = room.members.find((member) => member.id !== userId);
  return (
    <div
      onClick={onClick}
      className="relative w-full h-[72px] px-6 py-1 flex gap-x-2.5"
    >
      <Avatar
        width="64px"
        avatar={{
          skin: Math.floor(Math.random() * 4),
          eyes: Math.floor(Math.random() * 5),
          hair: Math.floor(Math.random() * 15),
          glasses: Math.floor(Math.random() * 4),
        }}
        emotion="positive"
      />
      <div className="flex flex-col justify-center gap-y-1">
        <div className="flex items-center gap-x-1">
          <div className="text-sm font-bold">{friendInfo.name}</div>
          {emotion}
        </div>
        {/* <div className="text-base font-medium">{room.message}</div> */}
        <div className="text-base font-medium">
          원래는 최근 메시지를 넣으려고 했다!
        </div>
      </div>
      <div
        className={"absolute right-0 inset-y-0 h-full w-3 " + getEmotion()}
      />
    </div>
  );
};

export default RoomItem;
