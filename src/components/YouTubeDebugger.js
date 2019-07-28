// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
            video: {
              resolution: '1080p'
          }
        }
          }
  }

    handleBitrateClick= () => {
      console.log("my bitrate is broken")
      this.setState({
        settings:{
        ...this.state.settings,
        bitrate: 12
      }
      })
    }

    handleResolutionClick= ()=> {
      console.log("why is everything so fuzzy?")
      this.setState({
        settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
            })
          })

        })
    }




  render(){
    return(
      <div>
        <h1> Hello from youtube</h1>
        <button className="resolution" onClick={this.handleResolutionClick}>AHHHHH, everything is blurry!</button>
        <button onClick={this.handleBitrateClick} className="bitrate">Reset the State!</button>
      </div>
    )
  }
}
export default YouTubeDebugger;
