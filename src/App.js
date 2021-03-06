import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="tailwindcss logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              React with Tailwindcss
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
