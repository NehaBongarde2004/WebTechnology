import Student from './Student.jsx'

function App() {
  return (
    <>
      <h1>Student Dashboard</h1>

      <Student name="Neha" age="21" course="AIML" />
      <Student name="Soham" age="19" course="CSE" />
      <Student name="Raj" age="20" course="Mechanical" />
    </>
  );
}

export default App;