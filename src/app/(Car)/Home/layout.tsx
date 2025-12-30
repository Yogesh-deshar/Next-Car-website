export default function HomeLayout({
  children,
  herosection,
  aboutsection,
  someofourcar,
  aboutussection,
}: Readonly<{
  children: React.ReactNode;
  herosection: React.ReactNode;
  aboutsection: React.ReactNode;
  someofourcar: React.ReactNode;
  aboutussection: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div>{herosection}</div>
        <div>{aboutsection}</div>
        <div>{someofourcar}</div>
        <div>{aboutussection}</div>
      </body>
    </html>
  );
}
