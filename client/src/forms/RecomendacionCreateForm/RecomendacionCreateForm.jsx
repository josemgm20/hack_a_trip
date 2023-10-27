// Importamos los prop-types.
import PropTypes from "prop-types";

// Importamos los hooks.
import { useState } from "react";


import { createRecommendationService } from "../../services/recommendatonService";

const RecomendacionCreateForm = ({ addRecommendation}) => {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);

  // Funcion que crea una recomendacion.
  const handleRecommendationCreate = async () =>{
    try {
      setLoading(true)

      // Creamos el objeto formData y establecemos propiedades
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('tipo', tipo);
      formData.append('descripcion', descripcion);

      // Si existe foto, la asignamos.
      if(foto) formData.append('foto', foto)


      // Creamos recomendacion en la base de datos
      const body = await createRecommendationService(FormData);

      // Actualizamos el State con la nueva recomendacion

      addRecommendation(body.data.recomendacion)
    } catch (err) {
      alert(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    
      

    <form className="recomendacion-create-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleRecommendationCreate();
      }}
    >
      <h2>Crear Recomendacion</h2>
      <label htmlFor="titulo">Titulo:</label>
      <input
        type="text"
        id="titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <label htmlFor="tipo">Tipo:</label>
      <select
        id="tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />

      <label htmlFor="foto">Foto:</label>
      <input
        type="file"
        id="foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
      />

      <label htmlFor="descripcion">Descripcion:</label>
      <textarea
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        maxLength='500'
        autoFocus
        required
      />

      <button disabled={loading}>Registrar</button>
    </form>
  );
};  

RecomendacionCreateForm.propTypes = {
  addRecommendation: PropTypes.func.isRequired
};


export default RecomendacionCreateForm;
