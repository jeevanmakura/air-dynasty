const ArrowRightDouble = ({
  size,
  color = "#1F2937",
}: {
  size?: number;
  color: string;
}) => {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 11.62L15.0534 7.81667C15.5026 7.3675 15.5026 6.6325 15.0534 6.18334L11.25 2.38"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25005 11.62L9.05338 7.81667C9.50255 7.3675 9.50255 6.6325 9.05338 6.18334L5.25005 2.38"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRightDouble;
