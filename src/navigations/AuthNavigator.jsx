import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../constants/routes';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.HOME} component={Home} />
      <Stack.Screen options={{headerShown: false}} name={ROUTES.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;