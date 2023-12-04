import Sidebar from "./Sidebar";

function Profile() {

    return (
        <div>
          <Sidebar/>
          <h1>Hello world, this is the Profile Page</h1>
          <button onClick={(() => {
            fetch('/api/dbTest');
          })}
          >click me</button>
         </div>
    );
  }
  
  export default Profile;