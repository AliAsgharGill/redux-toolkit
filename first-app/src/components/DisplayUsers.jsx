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
      <li key={id} className="font-bold w-[400px] ">
        {user}
        <button onClick={() => deleteUser(id)} className="fixed w-[400px]">
          <MdDeleteForever className="fill-red-600 h-[500] w-32 item-center flex " />
        </button>
        <hr />
      </li>
    );
  });
};

export default DisplayUsers;
