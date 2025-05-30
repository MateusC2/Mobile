import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import CadastroEvento from "./screens/CadastroEvento";
import CadastroIngresso from "./screens/CadastroIngresso";
import CadastroOrganizador from "./screens/CadastroOrganizador";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./components/Layout";
import EventoScreen from "./screens/EventosScreen";
// import TaskList from "./screens/TaskList";
// import TaskDetail from "./screens/TaskDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>

        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen
          name="CadastroOrganizador"
          component={CadastroOrganizador}
        />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />
        <Stack.Screen
          name="EventosScreen"
          component={() => (
            <Layout>
              <EventoScreen />
            </Layout>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
