import React from 'react';
import { v4 } from 'uuid';
import AddColorForm from './components/AddColorForm/AddColorForm';
import ColorList from './components/ColorList/ColorList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        {
          id: 1,
          title: 'Brandy',
          color: '#87413F',
          rating: 5,
        },
        {
          id: 2,
          title: 'Avocado',
          color: '#568203',
          rating: 4,
        },
        {
          id: 3,
          title: 'Black coffee',
          color: '#3B2F2F',
          rating: 5,
        },
        {
          id: 4,
          title: 'Blue sapphire',
          color: '#126180',
          rating: 0,
        },
      ],
    };

    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
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
      colors: [...prevState.colors.filter((color) => color.id !== id)],
    }));
  }

  rateColor(id, rating) {
    this.setState((prevState) => ({
      colors: prevState.colors.map((color) =>
        id !== color.id ? color : { ...color, rating }
      ),
    }));
  }

  render() {
    const { addColor, removeColor, rateColor } = this;
    const { colors } = this.state;

    return (
      <div className="app">
        <AddColorForm addColor={addColor} />
        <ColorList
          colors={colors}
          onRemoveColor={removeColor}
          onRate={rateColor}
        />
      </div>
    );
  }
}

export default App;
