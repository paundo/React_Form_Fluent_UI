import './App.css';
import * as React from 'react';
import { Checkbox, DatePicker, DefaultPalette, Stack, IStackItemStyles, Autofill } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Image, IImageProps } from '@fluentui/react/lib/Image';

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    color: DefaultPalette.white,
    display: 'flex',
    height: Autofill,
    textAlign: 'start',
    padding: '15px'
  },
};

const headerItem: IStackItemStyles = {
  root: {
    alignItems: 'center',
    color: DefaultPalette.white,
    display: 'flex',
    height: Autofill,
    padding: '15px'
  },
};

const header: IStackItemStyles = {
  root: {
    margin: '20px'
  },
};

const input: IStackItemStyles = {
  root: {
    width: '100%'
  },
};

const imageProps: Partial<IImageProps> = {
  src: 'https://www.cleverlance.com/Style%20Library/Images/clv/cleverlance-logo.png'
};

function App() {
  return (
    <div className="App">
      <Stack /*horizontal horizontalAlign="space-around"*/ style={header} >
        <Stack.Item align="start" style={headerItem}>
          <Image
            {...imageProps}
            alt="Logo"
          />
        </Stack.Item>
        <Stack.Item align="center" style={headerItem} >
          <Text variant={'xxLarge'} nowrap block>Nadpis</Text>
        </Stack.Item>
      </Stack>
      <Stack horizontal wrap>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <TextField label="Jméno" styles={input} />
        </Stack.Item>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <TextField label="Příjmení" styles={input} />
        </Stack.Item>
      </Stack>
      <Stack horizontal wrap>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <TextField label="E-mail" styles={input} />
        </Stack.Item>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <DatePicker label="Datum narození" styles={input} />
        </Stack.Item>
      </Stack>
      <Stack horizontal>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <Checkbox label="REACT" />
        </Stack.Item>
      </Stack>
      <Stack horizontal>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <DefaultButton text="Uložit" allowDisabledFocus styles={input} />
        </Stack.Item>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <DefaultButton text="Načíst" allowDisabledFocus styles={input} />
        </Stack.Item>
      </Stack>
      <Stack horizontal>
        <Stack.Item grow={5} styles={stackItemStyles}>
          <TextField label="Standard" multiline autoAdjustHeight styles={input} />
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default App;
