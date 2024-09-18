import { useState } from 'react';
import Button from './Button'
import styles from './Counter.module.css';

function Counter({ init, max, step = 1 }) {
  const [value, setValue] = useState(parseInt(init) || 0)
  const increment = (newValue) => {
    if (newValue <= 0) {
      newValue = 0
    } else if (max && newValue >= max) {
      newValue = max
    }

    setValue(newValue)
  }

  return (
    <div>
      {value > 0 && <Button className={styles.blue} emoji="" onClick={() => increment(value - step)}>-</Button>}
      {value}
      <Button className={styles.blue} emoji="" onClick={() => increment(value + step)} disabled={max && value >= max}>+</Button>
    </div>
  );
}

export default Counter;
