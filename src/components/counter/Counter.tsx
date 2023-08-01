import {useState} from "react";
import styles from './Counter.module.scss'

const Counter = () => {

    const [state, setState] = useState<number>(0)

    return (
        <div>
            <h1 className={styles.header}>{state}</h1>
            <button onClick={() => setState((prevState) => prevState + 1)}>add</button>
        </div>
    );
};



export default Counter;