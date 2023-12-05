import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default DisplayUsers;
