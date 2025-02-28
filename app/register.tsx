import RegisterScreen from "./(register)";

// I'm having a buggy navigation, I need to duplicate register.tsx and /register/index.tsx or project will crash.
export default function Index() {
  return RegisterScreen();
}