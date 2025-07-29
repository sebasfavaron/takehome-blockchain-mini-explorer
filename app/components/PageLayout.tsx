export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <main className='flex flex-col items-center'>{children}</main>
      <footer className=''></footer>
    </div>
  );
}
