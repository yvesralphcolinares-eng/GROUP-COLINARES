import { useState, useEffect } from 'react';
import './act3style.css';

function ActApp3() {
  
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/act3.json')
      .then(res => res.json())
      .then(data => {
        setPhones(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error:', err);
        setLoading(false);
      });
  }, []);

  function PhoneCard({ phone }) {
    return (
      <div className="phone-card">
        <img
          src={phone.image}
          alt={phone.name} 
          style={{ width: '100%', height: '60%', borderRadius: '10px', marginBottom: '30px' }}
        />
        <h3>{phone.name}</h3>
        <p>Type: {phone.type}</p>
        <p>Price: ${phone.price}</p>
        <p>{phone.inStock ? ' In Stock' : ' Out of Stock'}</p>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Loading phones...</div>;
  }

  return (
    <div className="main-app">
      <h1>High-End Smart Phones</h1><br />
      <div className="phones-grid">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default ActApp3;