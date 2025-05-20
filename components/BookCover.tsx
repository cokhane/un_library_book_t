import React from "react";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_extra_small",
  medium: "book-cover_extra_small",
  regular: "book-cover_extra_small",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant: BookCoverVariant;
  coverColor: string;
  coverUrl: string;
}
const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
}: Props) => {
  return <div className={
    cn('relative transition-all duration-300',
        variantStyles[variant],
    )
  }">

  </div>;
};

export default BookCover;
