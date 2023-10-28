// Importamos los hooks
import { usePost } from '../../hooks/usePost';

// Importamos los estilos
import './PostSearch.css';

const PostSearch = () => {
    const {posts, loading} = usePost();
    
    return (
    <main>
        <h2>Planes y experiencias</h2>

        <ul className='tweet-list'>
        { posts?.length > 0 && 
            posts.map((post) => {
            return <li key={post.id}>{post.text}</li>;
           })}
        </ul>
    </main>
    );
};

export default PostSearch;