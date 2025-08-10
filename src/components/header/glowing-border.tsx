import { cn } from '@/lib/utils';

export const GlowingBorder = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative group`, className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300" />
      <div className="relative bg-background rounded-lg">{children}</div>
    </div>
  );
};
