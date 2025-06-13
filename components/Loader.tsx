import Skeleton from "react-loading-skeleton";

export const Loader = ({
  count,
  height,
  margin,
  full,
}: {
  count?: number;
  height?: string;
  margin?: string;
  full?: boolean;
}) => {
  return (
    <div
      className={`w-full ${
        full ? "h-screen" : "min-h-full"
      } px-4 2xs:px-0 flex flex-col`}
    >
      <Skeleton
        containerClassName={`block`}
        className={`w-full ${height ?? "h-[1.5rem]"} rounded-[20px] ${
          margin ?? "mt-6"
        }`}
        count={count ?? 10}
      />
      <div className={`flex-1 w-full ${margin ?? "mt-6"}`}>
        <Skeleton
          containerClassName="block w-full min-h-full"
          className="w-full h-full rounded-[3px]"
        />
      </div>
    </div>
  );
};
