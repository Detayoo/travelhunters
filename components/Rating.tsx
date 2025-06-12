import React from "react";

const FiveStarRating = ({ stars }: { stars: number }) => {
  const validStars = Math.min(Math.max(stars, 0), 5);

  return (
    <div
      style={{ display: "flex", gap: "4px" }}
      aria-label={`Rating: ${validStars} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= validStars} />
      ))}
    </div>
  );
};

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill={filled ? "#FFD700" : "none"}
      stroke="#FFD700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default FiveStarRating;
