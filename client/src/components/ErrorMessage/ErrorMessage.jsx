// Importamos los prop-types.
import PropTypes from "prop-types";

// Importamos libreria de estilos
import swal from "sweetalert";

// Importamos los hooks.
import { useEffect } from "react";

// Importamos los estilos.
import "./ErrorMessage.css";

const ErrorMessage = ({ errMsg, setErrMsg }) => {
  useEffect(() => {
    setTimeout(() => {
      setErrMsg("");
    }, 5000);

    return () => {
      // limpiamos el temorizador cuando el componente se desmonte
      // clearTimeout(timer);

      // Limpiamos el mensaje de error
      setErrMsg("");
    };
  }, [errMsg, setErrMsg]);

  return (
    errMsg && (
      <div className="error-message">
        {console.warn(errMsg)}
        <p>⚠️ {errMsg}</p>
      </div>
    )
  );
};

ErrorMessage.propTypes = {
  errMsg: PropTypes.string.isRequired,
  setErrMsg: PropTypes.func.isRequired,
};

export default ErrorMessage;
