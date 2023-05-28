const HorizontalScrollCards = () => {
  return (
    <div className="_thin-scrollbar mx-auto flex w-4/5 items-center justify-center overflow-hidden">
      <div className="_snap-x-mandatory __scrollbar-hide flex space-x-4 overflow-x-auto">
        {/* Add your card components here */}
        <div className="_scroll-snap-start w-64 flex-shrink-0 transform rounded-lg bg-gray-100 p-4 transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p>This is the content of Card 1.</p>
        </div>
        <div className="_scroll-snap-start w-64 flex-shrink-0 transform rounded-lg bg-gray-100 p-4 transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold">Card 2</h3>
          <p>This is the content of Card 2.</p>
        </div>
        <div className="_scroll-snap-start w-64 flex-shrink-0 transform rounded-lg bg-gray-100 p-4 transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold">Card 3</h3>
          <p>This is the content of Card 3.</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
