import { Link } from 'react-router-dom';
const Trending = ({ data }) => {
  console.log(data);
  return (
    // <div>
    //   <h2>Movies</h2>
    //   {['movie-1', 'movie-2', 'movie-3'].map((movie, idx) => (
    //     <Link key={idx} to={String(idx)}>
    //       {movie}
    //     </Link>
    //   ))}
    // </div>
    <ul></ul>
  );
};
export default Trending;
