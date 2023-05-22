import Image from "next/image";
import HorizontalScrollView from "./components/HorizontalScrollView";
import BottomNav from "./components/BottomNav";

export default function Home() {
  let items = [
    {
      title: "item 1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nostrum totam corporis ex officia nisi, vitae perspiciatis. Illum dolore explicabo molestias, repudiandae, reiciendis nesciunt libero tempore ipsum aut quia nulla!",
    },
    {
      title: "item 2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nostrum totam corporis ex officia nisi, vitae perspiciatis. Illum dolore explicabo molestias, repudiandae, reiciendis nesciunt libero tempore ipsum aut quia nulla!",
    },
    {
      title: "item 3",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nostrum totam corporis ex officia nisi, vitae perspiciatis. Illum dolore explicabo molestias, repudiandae, reiciendis nesciunt libero tempore ipsum aut quia nulla!",
    },
    {
      title: "item 4",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nostrum totam corporis ex officia nisi, vitae perspiciatis. Illum dolore explicabo molestias, repudiandae, reiciendis nesciunt libero tempore ipsum aut quia nulla!",
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      Hello Next Js Page
      <div className="--mx-auto --w-1/2 flex w-full">
        <HorizontalScrollView>
          {items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[25vh] min-w-fit items-center justify-center gap-4 rounded-lg bg-slate-100 p-4 shadow md:h-auto md:w-full"
            >
              {item.text}
            </div>
          ))}
        </HorizontalScrollView>
      </div>
      <BottomNav />
    </main>
  );
}
