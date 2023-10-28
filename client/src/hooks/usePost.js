// Importamos los hooks.
import { useEffect, useState } from "react"

// Importamos los servicios.
import { listPostService } from "../services/postService";

export const usePost = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Aqui se realiza la petición para obtener los posts en la página
        const fetchPosts = async () => {
            try {
              setLoading(true);

              const body = await listPostService();

              setPosts(body.data.posts)
            } catch (err) {
                alert(err.message);
            }  finally {
                setLoading(false);
            }
        };

        // Llamamos a la función anterior
        fetchPosts();
    });

    return {
        posts,
        loading,
    };
};