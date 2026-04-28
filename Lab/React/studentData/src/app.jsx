import Student from './Student.jsx'

function App() {
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student Info</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <Student name="Neha" age="21" course="AIML" />
    </>
  );
}

export default App;