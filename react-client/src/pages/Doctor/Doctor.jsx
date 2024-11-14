import { useParams } from "react-router-dom";
import { DOCTORS } from "../../constants/data";

export const Doctor = () => {
  const { name } = useParams();
  const doctorDate = DOCTORS.find((item) => item.routeName === name);

  return <div>{doctorDate.name}</div>;
};
