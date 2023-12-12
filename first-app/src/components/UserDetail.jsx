import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "./store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
import header from "./../assets/Images/Header.png";
const UserDetail = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    // console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <>
      <div
        style={{
          height: "200px",
          width: "1000px",
          backgroundImage: `url(${header})`,
        }}
      ></div>
      <div className="">
        <div className="text-center font-bold text-4xl p-3  ">
          List of User Details
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-red-600  rounded-lg p-2 font-bold text-white text-md "
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </button>
          <ul>
            <DisplayUsers />
          </ul>
          <hr />
          <DeleteAllUser />
        </div>
      </div>
    </>
  );
};

export default UserDetail;
