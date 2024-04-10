import React, { useState } from 'react';
import supabase from '../../Authentication/Supabase/Supabase'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up successfully:', user);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>LogIn</button>
    </div>
  );
};

export default LogIn;