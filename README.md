# Analog-Clock
Analog Clock is a customizable React component that displays an analog clock with various options for customization.


## Installation



```bash
npm i seka-analogclock

```

## Usage

All props for the AnalogClock component are optional, allowing users to customize the clock's look and behavior. The package offers five different watch faces through the "numbertype" prop, and users can also define a custom watch face using the "customBg" prop.



```javascript

import React from 'react';
import { AnalogClock } from '@hoseinh/react-analog-clock';
const MyClock = () => {
  return (
    <AnalogClock
      showMinuteHand={true}
      showSecondHand={true}
      showBorder={true}
      showHandBase={true}
      smooth={false}
      whiteNumbers={false}
      square={false}
      numbersType="numbersAndLines"
      borderColor="#000000"
      handBaseColor="#000000"
      handColor={{ hour: "#000000", minute: "#000000", second: "#e74c3c" }}
      handLength={{ hour: "65px", minute: "90px", second: "90px" }}
      handThickness={{ hour: "2px", minute: "2px", second: "2px" }}
      size="200px"
      backgroundColor="#ffffff"
    />
  );
};

export default MyClock;
```



