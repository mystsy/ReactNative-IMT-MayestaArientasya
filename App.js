import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button, Label} from 'native-base';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {weight: '', height: '', bmi: '', diagnose: ''};
  this.compute = this.compute.bind(this);
}

compute() {
  console.log('On pressed!');
  let weight = parseFloat(this.state.weight);
  let height = parseFloat(this.state.height);

  this.setState({bmi: weight/Math.pow(height/100, 2)});

  if (this.state.bmi <= 18.5) {
    this.state.diagnose = 'Berat badan Anda kurang.'
  }
  else if (this.state.bmi >= 18.5 && this.state.bmi <= 24.9) {
    this.state.diagnose = 'Berat badan Anda ideal.'
  }
  else if (this.state.bmi >= 25 && this.state.bmi <= 29.9) {
    this.state.diagnose = 'Berat badan Anda berlebih.'
  }
  else if (this.state.bmi >= 30 && this.state.bmi <= 39.9) {
    this.state.diagnose = 'Berat badan Anda sangat berlebih.'
  }
  else if (this.state.bmi > 39.9) {
    this.state.diagnose = 'Anda obesitas.'
  }
}
  
render() {

return (
<Container>
  <Header>
    <Text>INDEKS MASSA TUBUH</Text>
    </Header>
  <Content>

    <Form>
      <Item floatingLabel><Label>Massa (kg)</Label>
        <Input
          value={this.state.weight}
          onChangeText={(weight) => this.setState({weight})}/>
      </Item>
      <Item floatingLabel last><Label>Tinggi (cm)</Label>
      <Input
          value={this.state.height}
          onChangeText={(height) => this.setState({height})}/>
      </Item>
    </Form>

    <Button full dark
      onPress={this.compute}>
      <Text>Hitung IMT</Text>
    </Button>
    
    <Text>{'\n'}
      Massa tubuh:{'\n'}
      {this.state.weight} kg{'\n'}{'\n'}
      Tinggi badan:{'\n'}
      {this.state.height/100} m{'\n'}{'\n'} 
      Indeks Massa Tubuh:{'\n'}
      {this.state.bmi}{'\n'}{'\n'}
      Diagnosa:{'\n'}
      {this.state.diagnose}
    </Text>

  </Content>
  <Footer></Footer>
</Container>
);}}

export default App;