export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1></h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
        {getMonstersFromAPI()}

      </div>
      <div>
        {addMonsterForm()}
      </div>
    </main>
  );
}

async function getMonstersFromAPI() {
  const response = await fetch(`http://10.5.0.6:3000/monsters/`, {
    method: 'GET',
    accept: 'application/json',
  });
  let monsters = await response.json();
  return (
    <div>
      <h1>Monster List</h1>
      <ul>
        {monsters.map((monster) => (
          <li key={monster}>Monster : {monster}</li>
        ))}
      </ul>
    </div>
  );
}

async function addMonsterForm() {
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
    window.alert('Monster added successfully');
    setMonsterName('');
  } catch (error) {
    window.alert('Error posting data:', error);
  }


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
          />
        </label>
        <button type="submit">Add Monster</button>
      </form>
    </div>
  );
}