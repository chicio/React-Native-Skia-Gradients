import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }} >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Texts',
                    tabBarIcon: ({ color }) => <FontAwesome name="file-text" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="paths"
                options={{
                    title: 'Paths',
                    tabBarIcon: ({ color }) => <FontAwesome name="paint-brush" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
