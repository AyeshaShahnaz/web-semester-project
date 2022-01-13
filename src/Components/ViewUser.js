import { useState, useEffect } from "react";
import { getuser, deleteuser } from "../Service/api";
import { Link } from "react-router-dom";

const ViewUser = () => {
  const [UserData, setUserData] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const result = await getuser();
    setUserData(result.data);
  };
  const deleteItem = async (id) => {
    try {
      console.log(id);
      await deleteuser(id);
      const data = UserData.filter((i) => i._id !== id);
      setUserData(data);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        backgroundSize: "cover",
        backgroundImage: `url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart")`,
      }}
    >
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Password</th>
            <th scope="col">Confirm_Password</th> */}
            </tr>
          </thead>
          <tbody>
            {UserData.map((details) => (
              <tr>
                <td>{details.FirstName}</td>
                <td>{details.LastName}</td>
                <td>{details.Email}</td>
                {/* <td>{details.Password}</td>
              <td>{details.Confirm_Password}</td> */}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(details._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/update/${details._id}`}>  
                  <div
                    className="btn btn-primary"
                  >
                     Update
                  </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
