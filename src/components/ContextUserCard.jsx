import { useAppContext } from "../context/AppContext";

export default function ContextUserCard() {
  const { user } = useAppContext();

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
}
