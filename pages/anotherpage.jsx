// index.html
import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default  function HomePage() {

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <p>This a new page!</p>
    </div>
  );
}