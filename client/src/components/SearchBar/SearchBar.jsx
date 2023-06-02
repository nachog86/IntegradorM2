import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };
  function handleSearch(event){
    id >= 827
    ? window.alert('El id no existe!')
    : onSearch(id)
     setId('')
 };

  return (
    <div className={styles.wrapperSearch}>
      <input
        className={styles.input}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button
        className={styles.btn}
        onClick= {handleSearch} 
          
        
      >
        Search
      </button>
    </div>
  );
}
