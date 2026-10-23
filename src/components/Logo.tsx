
export function LogoMark({
  size = 38,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="11" fill="#211D1B" />

      {/* Terracotta storefront awning */}
      <path
        d="M10 13h28v5a3.5 3.5 0 0 1-7 0
           3.5 3.5 0 0 1-7 0
           3.5 3.5 0 0 1-7 0
           3.5 3.5 0 0 1-7 0v-5Z"
        fill="#C15B43"
      />

      {/* Storefront */}
      <path
        d="M14 24v11h20V24"
        fill="none"
        stroke="#F8F6F2"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Door */}
      <path
        d="M22 35v-8h4v8"
        fill="none"
        stroke="#F8F6F2"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        className ?? ""
      }`}
    >
      <LogoMark size={38} />

     <span
  className={`font-heading text-[23px] font-semibold
    leading-none tracking-[0.0em] whitespace-nowrap ${
      light ? 'text-[#F8F6F2]' : 'text-ink'
    }`}
>
  Urban Essential
</span>
    </span>
  );
}
