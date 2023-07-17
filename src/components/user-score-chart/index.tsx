interface IUserScoreChartProps {
  score: number;
  cx?: string;
  cy?: string;
  r?: string;
  width?: string;
  height?: string;
}

const UserScoreChart = ({
  score,
  cx,
  cy,
  r,
  width,
  height,
}: IUserScoreChartProps) => {
  const getColorClass = (score: number) => {
    if (score === 0) return "bg-gray-300";
    if (score >= 70) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };
  const circumference = Number(r) * 2 * Math.PI;
  const strokeDashOffset = circumference - (score / 100) * circumference;

  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg
        className="w-10 h-10 bg-[#081c22]"
        style={{
          width: width,
          height: height,
        }}
      >
        <circle
          className={`${getColorClass(score)} score-color ${
            score === 0 ? "" : "opacity-40"
          }`}
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r={r}
          cx={cx}
          cy={cy}
        />
        <circle
          className={`${getColorClass(score)} -rotate-90 origin-[50%_50%]`}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={r}
          cx={cx}
          cy={cy}
        />
      </svg>
      {score === 0 ? (
        <span className="absolute font-semibold text-white flex">NR</span>
      ) : (
        <span className="absolute font-semibold text-white flex">
          {Math.floor(score)} <span className="text-[55%]">%</span>
        </span>
      )}
    </div>
  );
};

export default UserScoreChart;
