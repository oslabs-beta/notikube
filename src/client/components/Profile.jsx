function Profile() {

    return (
        <div>
          <h1>Hello world, this is the Profile Page</h1>
          <button onClick={(() => {
            fetch('/api/dbTest');
          })}
          >click me</button>
         </div>
    )
  }
  
  export default Profile