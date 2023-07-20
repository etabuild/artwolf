import {useState} from 'react'

import './App.css'
import {Layer, Rect, Stage, Line} from "react-konva";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;

import Menu from "./components/Menu";
import Intro from "./components/Intro";
import {Game} from "./components/Game"
import Guess from "./components/Guess"
import Result from "./components/Result"
import {BrowserRouter, Routes} from "react-router-dom";
function App() {
  return(
      <>
        <h1>artwolf</h1>
          <Game />
      </>
  )
}

export default App
