import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./supabase/supa";
import { AuthContext } from "../hooks/useSupa";
export default function AuthProvider({ children }) {
  const [authError, setAuthError] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(false);

  const signUp = async ({ email, password }) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    setLoading(false);
    if (data) {
      setUser(data.user);
    }
    return { data, error };
  };
  const signIn = async ({ email, password }) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
    if (data) {
      setUser(data.user);
    }
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) setAuthError(error);
  };

  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    setLoading(false);
    if (session) {
      setUser(session?.user ?? null);
    }
    if (error) {
      setAuthError(error?.message);
    }
  };

  const fecth_templates = async (search=null) => {
    const searchText =search ? search : "*";
    setContentLoading(true);
    const { data: templates, error } = await supabase
      .from("resume_templates")
      .select(searchText);
    setContentLoading(false);
     if (error) {
      return { templates: null, error }; // Return null for templates if error occurs
     }
     return { templates, error: null };
     };
  useEffect(() => {
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "INITIAL_SESSION") {
          setUser(session?.user ?? null);
        } else if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
        } else if (event === "SIGNED_OUT") {
          setUser(session?.user ?? null);
        } else if (event === "PASSWORD_RECOVERY") {
          // handle password recovery event
        } else if (event === "TOKEN_REFRESHED") {
          // handle token refreshed event
        } else if (event === "USER_UPDATED") {
          // handle user updated event
        }
      }
    );

    return () => authListener?.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        authError,
        user,
        signOut,
        loading,
        setAuthError,
        fecth_templates,
        contentLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

