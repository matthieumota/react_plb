import { useState } from 'react';

function Button({ children, emoji = '✅' }) {
  const [enabled, setEnabled] = useState(false)
  const toggle = () => setEnabled(!enabled)

  return (
    <button onClick={toggle}>
      {children} {enabled && emoji}
    </button>
  );
}

export default Button;
