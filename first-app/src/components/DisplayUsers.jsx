import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "./store/slices/UserSlice";
const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return data.map((user, id) => {
    return (
      <li key={id} className="font-bold  flex items-center justify-left ">
        <p className="">{user}</p>
        <button onClick={() => deleteUser(id)} className="">
          <MdDeleteForever className="fill-red-600 " />
        </button>
        <hr />
      </li>
    );
  });
};

export default DisplayUsers;
