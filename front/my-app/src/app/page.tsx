'use client';
import React, { useState } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1></h1>
      <div className="z-10 max-w-5xl w-full items-center  font-mono text-sm lg:flex">
        {MonsterList()}
      </div>
      <div>
        {MonsterForm()}
      </div>
    </main>
  );
}

async function MonsterList() {
  const response = await fetch(`http://10.5.0.6:3000/monsters/`, {
    method: 'GET',
  });
  const monsters: string[] = await response.json();

  return (
    <div>
      <h1>Monster List</h1>
      <ul>
        {monsters.map((monster: string, index: number) => (
          <li key={index}>Monster : {monster}</li>
        ))}
      </ul>
    </div>
  );
}


async function MonsterForm() {
  const [monsterName, setMonsterName] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://10.5.0.6:3000/monsters/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: monsterName }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success, e.g., reset the form or show a success message
      setIsSuccess(true);
      setMonsterName('');
    } catch (error) {
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <h2>Add a Monster</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Monster Name:
          <input
            type="text"
            value={monsterName}
            onChange={(e) => setMonsterName(e.target.value)}
            className="bg-gray-800 p-2 rounded-md"
          />
        </label>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>

      {isSuccess === true && <div>Success</div>}
      {isSuccess === false && <div>Failure</div>}
    </div>
  );
}