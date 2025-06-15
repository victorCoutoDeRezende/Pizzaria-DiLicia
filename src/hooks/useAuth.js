import { useState } from 'react';
import { apiLogin, apiSignup } from '../config/api';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (username, password) => {
    if (!username || !password) return setError('Por favor, preencha todos os campos.');
    setLoading(true);
    setError('');
    try {
      const user = await apiLogin(username, password);
      if (user) {
        setCurrentUser(user);
      } else {
        setError('Usuário ou senha incorretos.');
      }
    } catch (e) {
      setError('Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username, password) => {
    if (!username || !password) return setError('Por favor, preencha todos os campos.');
    setLoading(true);
    setError('');
    try {
      const newUser = await apiSignup(username, password);
      setCurrentUser(newUser);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return { currentUser, loading, error, login, signup, logout };
};
