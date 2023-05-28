import BottomNav from "../components/BottomNav";

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

const AppShell = (props: Props) => {
  return (
    <section className="scrollable relative flex min-h-screen flex-col items-center justify-between gap-4 md:mx-auto md:w-1/4">
      <main className="flex h-screen min-h-screen w-full flex-col items-center justify-start gap-8 overflow-y-auto px-2 pb-28 pt-4 text-gray-900 md:pb-32">
        {props.children}
      </main>
      <BottomNav />
    </section>
  );
};

export default AppShell;
