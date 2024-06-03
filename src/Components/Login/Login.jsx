import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o Sistema</h1>
        <div>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="password" placeholder="Senha" />
        </div>
      </form>
    </div>
  );
};

export default Login;
