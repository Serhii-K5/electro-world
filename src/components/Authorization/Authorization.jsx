
import user from "assets/images/svg/user_icon.svg";

const Authorization = () => {
  return (
    <div style={{display: "flex", alignItems: 'center'}}>
      <div>Авторизация</div>
      <img src={user} alt="user icon" />
    </div>

  );
}

export default Authorization;