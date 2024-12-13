import { useState } from "react";
import "./styles.css";
import { useAnalizeImage } from "../hooks/useAnalizeImage";
import { Loading } from "./Loading";

function App() {
  const [image, setImage] = useState<any>(null);
  const [base64, setBase64] = useState<any>("");
  const { fetcher, response, error, loading } = useAnalizeImage();

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const sender = () => {
    fetcher(base64);
  };

  return (
    <div className="app-container">
      <h1 className="title">Sube una imagen para evaluar su estado</h1>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          onChange={handleImageUpload}
          className="file-input"
        />
        <label htmlFor="file-upload" className="file-label">
          Cargar imagen
        </label>
      </div>
      {image && (
        <>
          <div className="preview-section">
            <h2>Imagen cargada</h2>
            <img src={image} alt="Uploaded Preview" className="preview-image" />
          </div>
          <div>
            <button onClick={sender}> Analizar imagen </button>
          </div>
        </>
      )}
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>{error && <span>Hubo un error al analizar la imagen</span>}</div>
          <div>{response && <span>{response}</span>}</div>
        </div>
      )}
    </div>
  );
}

export default App;
