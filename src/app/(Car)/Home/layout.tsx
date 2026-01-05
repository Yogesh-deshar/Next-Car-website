export default function HomeLayout({
  children,
  herosection,
  aboutsection,
  someofourcar,
  aboutussection,
  partnersection,
}: Readonly<{
  children: React.ReactNode;
  herosection: React.ReactNode;
  aboutsection: React.ReactNode;
  someofourcar: React.ReactNode;
  aboutussection: React.ReactNode;
  partnersection: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>{herosection}</div>
      <div>{aboutsection}</div>
      <div>{someofourcar}</div>
      <div>{aboutussection}</div>
      <div>{partnersection}</div>
    </>
  );
}
