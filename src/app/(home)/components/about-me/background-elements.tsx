export default function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </>
  );
}
