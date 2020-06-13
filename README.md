# Flash Notify

Easy and simple flash notify for React Native...

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install.

```bash
yarn add flash-notify
```

## Usage

```javascript
import React from "react";
import OtherComponent from "./src";
import FlashComponent from 'flash-notify'

export default App = () => {

    return (
      <View>
        {/*Declare in your main APP*/}
        <FlashComponent />
        <OtherComponent/>
      </View>
    );

}
```


```javascript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { showFlash } from 'flash-notify'

export default OtherComponent = () => {

    return (
        <View>
            <TouchableOpacity onPress={() =>
             showFlash({ type: 'NEUTRAL', desc: 'Created by Adonis <3', title: 'Flash Message' }) 
             }>
                <Text>Desenvolvendo um componente para teste</Text>
            </TouchableOpacity>
        </View>
    );

}
