import PhoneFrame from "./components/PhoneFrame";

function App() {
  return <div className="sm:px-10 min-h-screen py-10 bg-blue-200 flex-col flex-wrap mx-auto">
    <div className="sm:w-[500px] sm:mx-auto mx-4 mb-4">
      <p className="p-4 text-base"><span className="font-bold text-lg">J.A.R.V.I.S. mini</span><br></br> a friendly, artificially intelligent assistant that can help you with anything you need.</p>
    </div>
    <PhoneFrame/>
    <div className="sm:w-[500px] sm:mx-auto mx-4 mt-4">
      <p className="p-4 text-center"><span className="font-semibold">Need some suggestions to get started? Try out:</span>
        <br></br>How are you able to help me?
        <br></br>What's a good action movie to watch?
        <br></br>Hello, how are you today?</p>
    </div>
  </div>;
}

export default App;
