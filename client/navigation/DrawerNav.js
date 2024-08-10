import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../app/Home';
import DieasesDetect from '../app/DieasesDetect';
import SoilDetection from '../app/SoilDetection';
import FruitCounting from '../app/FruitCounting';

const Drawer = createDrawerNavigator();


const DrawerNav = () => {
    return (
      <>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: "CROPDOC",
            headerStyle: {
              backgroundColor: "#e5e3d9",
            },
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Disease Detection" component={DieasesDetect} />
          <Drawer.Screen name="Soil Detection" component={SoilDetection} />
          <Drawer.Screen name="Fruit Counting" component={FruitCounting} />
        </Drawer.Navigator>
      </>
    );
}



export default DrawerNav;
