import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

import { colors, mainWindow, text, mainMenu } from '../game.json';

class MainMenu extends Component {
  render() {
    return (
      <Stage width={game.mainWindow.width} height={game.mainWindow.height}>
        <Layer>
          <Rect /* this is the background color of the mainboard */
            x={0}
            y={0}
            width={game.mainWindow.width}
            height={game.mainWindow.height}
            fill={game.colors.mainMenu}
          />
        </Layer>
        <Layer>
          <Text
            text={game.text.mainMenu.title}
            fontSize={game.mainWindow.titleSize}
            align="left"
            fontFamily="Calibri"
            width={game.mainWindow.width}
            padding={10}
            />
        </Layer>
        <Layer>
          <Text
            text={game.text.mainMenu.topScore}
            fontSize={game.mainWindow.topScoreSize}
            align="right"
            fontFamily="Calibri"
            width={game.mainWindow.topScoreWidth}
            padding={10}
           />
        </Layer>
      </Stage>
    );
  }
}

export default MainMenu;