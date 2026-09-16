import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: React.ReactNode;
  minWidth?: number; // below this width the figure scrolls sideways instead of shrinking its labels away
  unoptimized?: boolean;
};

export default function Figure({ src, width, height, alt, caption, minWidth = 0, unoptimized }: Props) {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto border border-line bg-surface">
        <div className="p-3 sm:p-5" style={{ minWidth }}>
          <Image src={src} width={width} height={height} alt={alt} unoptimized={unoptimized}
            sizes="(min-width: 1100px) 820px, 100vw" className="h-auto w-full" />
        </div>
      </div>
      <figcaption className="mt-3 text-[13px] leading-[1.65] text-muted text-pretty">{caption}</figcaption>
    </figure>
  );
}
