interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

const HorizontalScrollView = (props: Props) => {
  return (
    // <section className="--media-scroller --snaps-inline grid min-h-[25vh] w-full snap-mandatory scroll-px-4 auto-cols-max grid-flow-col gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 py-2">
    <section className="--media-scroller --snaps-inline flex min-h-full w-full flex-auto snap-mandatory scroll-px-4 items-center justify-between gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 py-2">
      {Array.isArray(props.children) ? (
        props.children.map((child, idx) => (
          <div
            className="--media-item flex w-full flex-auto snap-start items-center justify-center gap-4 p-2"
            key={idx}
          >
            {child}
          </div>
        ))
      ) : (
        <div className="--media-item flex w-full flex-auto snap-start items-center justify-center gap-4 p-2">
          {props.children}
        </div>
      )}
    </section>
  );
};

export default HorizontalScrollView;
