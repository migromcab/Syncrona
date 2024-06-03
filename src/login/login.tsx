import { useState } from "react";
import { Button, Input, Checkbox } from "../components/atoms";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const logIn = () => {
    console.log("me clickearon banda");
  };
  return (
    <div className="margin__center ">
      <div className="bg__login ">
        <div>
          <Input
            placeholder="username"
            value={userName}
            width="90%"
            height="68px"
            inputLabel="Username"
            name="username"
            setValue={setUserName}
          />
        </div>
        <div style={{ borderRadius: "10px" }}>
          <Input
            placeholder="password"
            value={password}
            width="90%"
            height="68px"
            inputLabel="Password"
            name="password"
            setValue={setPassword}
            type="password"
          />
        </div>

        <Button
          text="Log in"
          type="primary"
          onClick={logIn}
          width={"155px"}
          height={"55px"}
        />
        <p>tu user name: {userName}</p>
        <p>tu contraseña: {password}</p>
        <Checkbox
          setChecked={setChecked}
          text="henlo"
          checked={checked}
          name="cualquier nombre"
        />
      </div>
    </div>
  );
};

export default Login;
