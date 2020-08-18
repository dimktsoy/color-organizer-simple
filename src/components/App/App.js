import React from 'react';
import { v4 } from 'uuid';
import AddColorForm from './../AddColorForm/AddColorForm';
import ColorList from './../ColorList/ColorList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    this.setState((prevState) => ({
      colors: [
        ...prevState.colors,
        {
          title,
          color,
          id: v4(),
          rating: 0,
        },
      ],
    }));
  }

  removeColor(id) {
    this.setState((prevState) => ({
      colors: prevState.colors.filter((color) => color.id !== id),
    }));
    console.log(11);
  }

  render() {
    const { addColor, removeColor } = this;
    const { colors } = this.state;

    return (
      <div className="app">
        <AddColorForm addColor={addColor} />
        <ColorList colors={colors} onRemoveColor={removeColor} />
      </div>
    );
  }
}

export default App;
