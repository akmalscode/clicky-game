import React from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images";

console.log(images);

class Header extends React.Component{
  render(){
    return(
      <header>
        <div>
          Clicky-Game
        </div>
        <div>
          <div>
            Score:{this.props.score}
          </div>
          <div>
            Top Score:{this.props.topScore}
          </div>
        </div>

      </header>

    );

  }
}


class App extends React.Component{

  state = {

    score:0,
    topScore:0,
    images:images,
    clickedPhotos:[]

  };

  shufflePhotos=()=>{
    //
  }


  handleClick=(image)=>{
    console.log(image)
    let clickedAlready=this.state.clickedPhotos.find(photo=>{
      console.log(photo)
      return photo.link===image.link;
    });

    console.log(clickedAlready)
    if (clickedAlready){
      this.setState({score:0,clickPhotos: []});
      return;
    }
    let newScore=this.state.score+1;
    let newTopScore=newScore;
    if(this.state.topScore < this.state.score) {
      newTopScore=this.state.score;
    }
    this.setState({score:newScore,topScore:newTopScore,clickedPhotos: [...this.state.clickedPhotos,image]});

    this.shufflePhotos();

  }  
  render(){



    return(

      <div>
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <div className="App">Clicky-Game
      {
        this.state.images.map(image=>{
          return <img src={image.link} height ="200" width="200" 
          onClick={()=>this.handleClick(image)}/>
        })
      }
        </div>
      </div>
    );
  }


}


export default App;
