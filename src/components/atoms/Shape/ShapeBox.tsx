import Link from 'next/link';

import { IShapeBoxProps } from '@/types/components/IAtoms';

import { cn } from '@/lib/utils';


const ShapeBox = ({
  url,
  width = '42px',
  height = '42px',
  className,
  children,
}: IShapeBoxProps) => {
  const boxStyles = cn(
    'bg-secondary flex items-center justify-center transition-colors duration-200',
    className
  );

  const boxContent = (
    <div
      className={boxStyles}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {children}
    </div>
  );

  if (url) {
    return (
      <Link href={url} className="block">
        {boxContent}
      </Link>
    );
  }

  return boxContent;
};

export default ShapeBox;