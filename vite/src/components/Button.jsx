import { useState } from 'react';

function Button({ children, emoji = '✅', onClick = () => {}, ...props }) {
  const [enabled, setEnabled] = useState(false)
  const toggle = () => {
    setEnabled(!enabled)
    // Une props qui est une fonction que j'appelle
    // (callback)
    onClick && onClick()
  }

  return (
    <button onClick={toggle} {...props}>
      {children} {enabled && emoji}
    </button>
  );
}

export default Button;
