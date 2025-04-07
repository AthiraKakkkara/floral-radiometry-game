import { useState } from 'react';

export default function Home() {
  const [guess, setGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const correctAnswer = "UV - Blue"; // Change this daily

  const handleSubmit = () => {
    setSubmitted(true);
    if (guess === correctAnswer) {
      setMessage("🎉 Correct! You've earned a digital flower!");
    } else {
      setMessage("❌ Oops! Try again tomorrow!");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🌸 Floral Radiometry Challenge 🌸</h1>
      <p>Guess the bee-perceived color of today's flower!</p>
      <img src="/images/flower.jpg" alt="Flower of the Day" style={{ width: '300px', borderRadius: '1rem' }} />
      <br /><br />
      <select onChange={(e) => setGuess(e.target.value)} defaultValue="">
        <option value="" disabled>Select perceived color</option>
        <option value="UV">UV</option>
        <option value="UV Blue">UV Blue</option>
        <option value="UV - Green">UV - Green</option>
        <option value="Blue">Blue</option>
        <option value="Blue - Green">Blue - Green</option>
        <option value="Green">Green</option>
      </select>
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>Submit Guess</button>
      <br /><br />
      {submitted && <h2>{message}</h2>}
    </div>
  );
}
