import { useRouter } from "next/router";
import BackMenu from "../../../components/Shared/backMenu";
const Action = () => {
  const router = useRouter();
  const action = router.query.action;
  return (
    <div>
      <BackMenu title={`lead ${action}`} />
      <div className="bg-gray-100">
        <h1 className="text-2xl text-center">Action {action} </h1>
      </div>
    </div>
  );
};

export default Action;
