interface IUserScoreChartProps {
  score: number;
}

const UserScoreChart = ({ score }: IUserScoreChartProps) => {
  const getColorClass = (score: number) => {
    if (score === 0) {
      return "bg-gray-300";
    }
    if (score >= 70) {
      return "text-green-500";
    } else if (score >= 50) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const strokeDashOffset = 105 - (score / 100) * 105;

  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg className="w-10 h-10 bg-[#081c22]">
        <circle
          className={`${getColorClass(score)} ${
            score === 0 ? "" : "opacity-40"
          }`}
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="17"
          cx="20"
          cy="20"
        />
        <circle
          className={`${getColorClass(score)} -rotate-90 origin-[50%_50%]`}
          strokeWidth="2"
          strokeDasharray="105"
          strokeDashoffset={strokeDashOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="17"
          cx="20"
          cy="20"
        />
      </svg>
      {score === 0 ? (
        <span className="absolute font-semibold text-sm text-white flex">
          NR
        </span>
      ) : (
        <span className="absolute font-semibold text-sm text-white flex">
          {score} <span className="text-[8px]">%</span>
        </span>
      )}
    </div>
  );
};

export default UserScoreChart;
