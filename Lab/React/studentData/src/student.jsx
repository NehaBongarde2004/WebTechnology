function Student(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Course: {props.course}</h1>

      {/* use array of object for multiple records */}
    </>
  );
}

export default Student;