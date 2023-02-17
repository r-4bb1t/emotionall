import { useEmotion } from "@/contexts/emotionContext";
import { useUser } from "@/contexts/userContext";
import Avatar from "../avatar/Avatar";
import cc from "classcat";
import { badge } from "@/constants/badge";
import BarChart from "./BarChart";
import { checkTextEndsWithCoda } from "@/utils/texts";
import BadgeAndPercent from "./BadgeAndPercent";

const Report = () => {
  const { user } = useUser();
  const { mainEmotion: emotion } = useEmotion();
  return (
    <div className="px-6 pt-4">
      <div className="report-title">감정 보고서</div>
      <div className="w-full flex items-center">
        <Avatar width="128px" avatar={user.avatar} emotion={emotion} />
        <div className="flex flex-col gap-2">
          <div
            className={cc([
              "badge badge-none",
              badge[user.badge].color === "positive" && "badge-positive",
              badge[user.badge].color === "negative" && "badge-negative",
              badge[user.badge].color === "neutral" && "badge-neutral",
              badge[user.badge].color === "ambiguous" && "badge-ambiguous",
            ])}
          >
            {badge[user.badge].name}
          </div>
          <ul className="list-disc list-outside pl-6 text-sm font-medium">
            {badge[user.badge].description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4">
        <BarChart />
      </div>

      <div className="w-full bg-black-200 h-px my-4" />
      <div className="grid grid-cols-2 place-items-center py-4">
        <div className="flex flex-col items-center">
          <div className="font-bold text-sm">나와 성향이 같은 친구들</div>
          <div className="grid grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div className="flex flex-col items-center px-2 py-2">
                <Avatar
                  width={"32px"}
                  avatar={{ skin: 1, eyes: 2, hair: 12, glasses: 0 }}
                  emotion="positive"
                />
                <div className="text-sm font-semibold">채린이</div>
                <div className="badge badge-positive font-semibold text-sm py-0.5 px-2 mt-1">
                  파워긍정
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-sm">잘 맞는 성향의 친구들</div>
          <div className="grid grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div className="flex flex-col items-center px-2 py-2">
                <Avatar
                  width={"32px"}
                  avatar={{ skin: 1, eyes: 2, hair: 12, glasses: 0 }}
                  emotion="positive"
                />
                <div className="text-sm font-semibold">채린이</div>
                <div className="badge badge-positive font-semibold text-sm py-0.5 px-2 mt-1">
                  파워긍정
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black-200 h-px my-4" />
      <div className="flex flex-col items-center">
        <div className="font-bold">
          나는 <span className="font-black">채린이</span>
          {checkTextEndsWithCoda("채린이") ? "과" : "와"} 대화할 때 가장
          긍정적이네요!
        </div>
        <div className="grid grid-cols-4 place-items-center px-8">
          <BadgeAndPercent emotion={"positive"} percent={66} />
          <div className="-scale-x-100">
            <Avatar width={"96px"} avatar={user.avatar} emotion="positive" />
          </div>
          <Avatar
            width={"96px"}
            avatar={{ skin: 1, eyes: 2, hair: 12, glasses: 0 }}
            emotion="positive"
          />
          <BadgeAndPercent emotion={"positive"} percent={59} />
        </div>
      </div>
    </div>
  );
};

export default Report;