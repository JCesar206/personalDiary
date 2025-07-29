import { useState, useEffect } from 'react';
import EntryForm from './components/EntryForm';
import Footer from './components/Footer';
import './App.css';

const PASSWORD = 'singlepassword123';

function App() {
  const [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem('diaryEntries')) || []);
  const [editIndex, setEditIndex] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSave = (entry) => {
    if (editIndex !== null) {
      const updated = [...entries];
      updated[editIndex] = entry;
      setEntries(updated);
      setEditIndex(null);
    } else {
      setEntries([...entries, entry]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  const checkPassword = () => {
    if (inputPassword === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('¡Contraseña incorrecta! 🚫');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-center px-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white">🔐 Ingresa tu contraseña</h1>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border p-2 rounded w-64 mb-2"
        />
        <button
          onClick={checkPassword}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen pb-32 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center">
        <div className="w-full max-w-xl flex justify-between items-center mt-6">
          <h1 className="text-3xl font-bold">📓 Diario Personal</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:scale-105 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <EntryForm onSave={handleSave} editData={entries[editIndex]} />
        <div className="w-full max-w-xl mt-6 space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <div className="text-sm text-gray-500 dark:text-gray-400">{entry.date}</div>
              <div className="mt-2 font-semibold">{entry.text}</div>
              <div className="flex justify-end gap-2 mt-2">
                <button onClick={() => handleEdit(index)} className="text-blue-500 hover:underline">Editar</button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:underline">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;