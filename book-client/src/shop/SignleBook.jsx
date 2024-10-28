import { useLoaderData } from "react-router-dom";

const SignleBook = () => {
  const { _id } = useLoaderData();
  return <div className="mt-28 px-4 lg:px-24">{_id}</div>;
};

export default SignleBook;
