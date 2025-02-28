import LoginScreen from "./(login)";

// I'm having a buggy navigation, I need to duplicate login.tsx and /login/index.tsx or project will crash.
export default function Index() {
  return LoginScreen();
}