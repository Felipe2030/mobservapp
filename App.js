import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';
import './gesture-hundler';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
