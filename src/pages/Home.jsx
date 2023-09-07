import Counter from "../components/Counter";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12">Home</h1>
      <div className="text-center">
        <Counter></Counter>
      </div>
    </div>
  );
};

export default Home;
