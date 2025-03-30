import "./CharacterGrid.css";

type CharacterGridProps = {
  characters: string[];
  borderStatusColor?: "success" | "failed" | "";
  numSquares: number;
};

export const CharacterGrid = ({
  characters,
  borderStatusColor,
  numSquares,
}: CharacterGridProps) => {
  return (
    <div className={"character-grid"}>
      {Array.from({ length: numSquares }).map((_, index) => (
        <div key={index} className={`character-square ${borderStatusColor}`}>
          {characters[index] || ""}
        </div>
      ))}
    </div>
  );
};
