import './App.css';
import * as React from 'react';
import { DatePicker, DefaultPalette, Stack, IStackItemStyles, Autofill } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Image, IImageProps } from '@fluentui/react/lib/Image';
import { Toggle } from '@fluentui/react/lib/Toggle';
import * as moment  from 'moment';
import validator from 'validator';

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
  src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg'
};

var convertedJsonValue;

class App extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    birthDay: moment().format('YYYY-MM-DD'),
    react: true,
    jsonValue: ''
  };

  btnSave = (event) => {
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const birthDay = moment(this.birthDay.value).format('YYYY-MM-DD');

    if (validator.isEmail(email)) {
      this.setState({ 
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthDay: birthDay
      });

      var vals = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthDay: birthDay,
        react: this.state.react
      }
  
      this.state.jsonValue = JSON.stringify(vals);

      this.setState({ 
        firstName: '',
        lastName: '',
        email: '',
        birthDay: moment().format('YYYY-MM-DD'),
        react: true
      });

      alert('Hodnoty převedeny do JSON formátu.');
    }
    else {
      alert('Prosím zadejte validní e-mail.');
    }
  }

  btnLoad = (event) => {
    const jsonValue = this.jsonValue.value;

    if (validator.isJSON(jsonValue)) {
      if (this.jsonValue.value.includes("firstName") && this.jsonValue.value.includes("lastName") && this.jsonValue.value.includes("email") && this.jsonValue.value.includes("birthDay") && this.jsonValue.value.includes("react")) {
        const loadedData = JSON.parse(jsonValue);
        this.setState({
          firstName: loadedData['firstName'],
          lastName: loadedData['lastName'],
          email: loadedData['email'],
          birthDay: loadedData['birthDay'],
          react: loadedData['react']
        });
      }
      else {
        alert('Prosím zadejte validní JSON údaje.');
      }
    }
    else {
      alert('Prosím zadejte validní JSON.');
    }
  }
  
  render() {
    return (
      <div className="App">
        <Stack  style={header} >
          <Stack.Item align="start" style={headerItem}>
            <Image
              {...imageProps}
              alt="Logo"
              height='50px'
            />
          </Stack.Item>
          <Stack.Item align="center" style={headerItem} >
            <Text variant={'xxLarge'} nowrap block>Nadpis</Text>
          </Stack.Item>
        </Stack>
        <Stack horizontal wrap>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <TextField label="Jméno" styles={input} value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})} ref={ (input) => this.firstName = input } />
          </Stack.Item>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <TextField label="Příjmení" styles={input} value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})} ref={ (input) => this.lastName = input } />
          </Stack.Item>
        </Stack>
        <Stack horizontal wrap>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <TextField label="E-mail" styles={input} value={this.state.email} onChange={e => this.setState({email: e.target.value})} ref={ (input) => this.email = input } />
          </Stack.Item>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <DatePicker label="Datum narození" styles={input} value={moment(this.state.birthDay).toDate()} onChange={e => this.setState({birthDay: e.target.value})} ref={ (input) => this.birthDay = input } />
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <Toggle label="React" defaultChecked onText="Yes" offText="No" checked={this.state.react} onChange={e => this.setState({react: !this.state.react})} />
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <DefaultButton text="Uložit" allowDisabledFocus styles={input} onClick={this.btnSave} />
          </Stack.Item>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <DefaultButton text="Načíst" allowDisabledFocus styles={input} onClick={this.btnLoad} />
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item grow={5} styles={stackItemStyles}>
            <TextField label="Standard" multiline autoAdjustHeight styles={input} value={this.state.jsonValue} onChange={e => this.setState({jsonValue: e.target.value})} ref={ (input) => this.jsonValue = input } />
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}

export default App;
