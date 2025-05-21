import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "@/components/BookCoverSvg";
type BookCoverVariant = "small" | "default" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  // extraSmall: "book-cover_extra_small",
  small: "book-cover_extra_small",
  // medium: "book-cover_extra_small",
  default: "book-cover",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverImage?: string;
}
const BookCover = ({
  className,
  variant = "default",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Book cover"
          fill
          className="rounde-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
