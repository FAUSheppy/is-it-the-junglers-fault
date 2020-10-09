import React from 'react';
import './App.css';

var text00 = "So you just died in your lane. That sucks. Let's find out if it was the jungler's fault."
var text01 = "Was the enemy jungler involved in your death?"
var text02 = "Did the enemy jungler walk over a ward and you didn't respect it?"
var text03 = "Did you have a ward?"
var text04 = "Was the enemy lane playing suspiciously before the gank?"
var text05 = "Were you standing in an uncomfortable position, which made a gank easy?"
var text06 = "Do you have a scaling/farming jungle like Shyvanna or a jungler that generally doesn't like to gank before hitting a certain level like Nocturne?"
var text07 = "Did you get dove?"
var text08 = "Did you ping for help before getting dove?"
var text09 = "Did your jungler make a cross-map play or get an objective?"
var text10 = "Do you want to win your game?"

var answer01 = "Let me stop you right there: It was YOUR fault you died, grow the fuck up stop blaming your teammates.."
var answer02 = "Watch the goddamn minimap, stop blaming your jungler!"
var answer03 = "Pay attention to the game, stop blaming your jungler!"
var answer04 = "Maybe work on your wavemanagement instead of blaming me - eh.. I mean your jungler."
var answer05 = "If your jungler makes a cross-map play, it is your descision to die for it. Either your death was worth it, because the enemies didn't go to the objective or it was preventable, because your could have left your tower, but decided to greed for the wave."
var answer06 = "It was probably the jungler's fault. But remember nobody is perfect, sometimes junglers make mistakes - just like laners sometimes die in 1v1 or 2v2s. Be kind to your jungler and try your best to win the game."
var answer07 = "Flame the shit out of that trash player and tell him to uninstall the game or play Yuumi for the rest of his worthless life."
var answer08 = "If you are in danger of being dove, it's your responsibility to inform your team you need help. It's not the junglers responsibility to know more about your lane-state than yourself."
var answer09 = "Stay at your goddamn tower. Stop blaming the jungler."
var answer10 = "If you want to push, you have to ward, if you don't have a ward, you can't push. It's not the junglers fault if you die pushing without a ward."

class MainDialog extends React.Component{

    constructor(props){
        super(props)
        this.stateMap = new Map()
        this.stateMap.set("start",       { "type" : "q", "text" : text00, "yes" : "j_involved",  "no" : null })
        this.stateMap.set("j_involved",  { "type" : "q", "text" : text01, "yes" : "j_was_seen",  "no" : "a_grow_up" })
        this.stateMap.set("j_was_seen",  { "type" : "q", "text" : text02, "yes" : "a_minimap",   "no" : "s_had_ward" })
        this.stateMap.set("s_had_ward",  { "type" : "q", "text" : text03, "yes" : "e_playstyle", "no" : "a_p_ward" })
        this.stateMap.set("e_playstyle", { "type" : "q", "text" : text04, "yes" : "a_autopilot", "no" : "s_bad_pos" })
        this.stateMap.set("s_bad_pos",   { "type" : "q", "text" : text05, "yes" : "a_waves",     "no" : "j_scaling" })
        this.stateMap.set("j_scaling",   { "type" : "q", "text" : text06, "yes" : "s_got_dove",  "no" : "j_cross_map" })
        this.stateMap.set("s_got_dove",  { "type" : "q", "text" : text07, "yes" : "s_pinged",    "no" : "a_play_def" })
        this.stateMap.set("s_pinged",    { "type" : "q", "text" : text08, "yes" : "s_win_game",  "no" : "a_ping_help" })
        this.stateMap.set("j_cross_map", { "type" : "q", "text" : text09, "yes" : "a_awareness", "no" : "s_got_dove" })
        this.stateMap.set("s_win_game",  { "type" : "q", "text" : text10, "yes" : "a_jungler",   "no" : "a_flame" })

        this.stateMap.set("a_grow_up",   { "type" : "a", "text" : answer01 })
        this.stateMap.set("a_minimap",   { "type" : "a", "text" : answer02 })
        this.stateMap.set("a_autopilot", { "type" : "a", "text" : answer03 })
        this.stateMap.set("a_waves",     { "type" : "a", "text" : answer04 })
        this.stateMap.set("a_crossmap",  { "type" : "a", "text" : answer05 })
        this.stateMap.set("a_jungler",   { "type" : "a", "text" : answer06 })
        this.stateMap.set("a_flame",     { "type" : "a", "text" : answer07 })
        this.stateMap.set("a_ping_help", { "type" : "a", "text" : answer08 })
        this.stateMap.set("a_play_def",  { "type" : "a", "text" : answer09 })
        this.stateMap.set("a_p_ward",    { "type" : "a", "text" : answer10 })
        this.state = this.stateMap.get("start")

        this.updateStateYes = this.updateStateYes.bind(this);
        this.updateStateNo = this.updateStateNo.bind(this);
        this.updateStateReset = this.updateStateReset.bind(this);
    }

    updateStateYes(){
        this.setState(this.stateMap.get(this.state["yes"]))
    }

    updateStateNo(){
        this.setState(this.stateMap.get(this.state["no"]))
    }

    updateStateReset(){
        this.setState(this.stateMap.get("start"))
    }

    buttonsForState(){
        if(this.state["type"] === "a"){
            return (
                <React.Fragment>
                    <button className="btn-secondary yes button-big pl-5 pr-5" onClick={this.updateStateReset}>Return
                    </button>
                </React.Fragment>
            );
        }else if(this.state["no"] == null){
            return (
                <React.Fragment>
                    <button className="btn-secondary yes button-big pl-5 pr-5" onClick={this.updateStateYes}>Ok</button>
                </React.Fragment>
            );
        }else{
            return (
              <React.Fragment>
                <button className="btn-secondary yes pl-5 pr-5 m-5 button-big" onClick={this.updateStateYes}>Yes</button>
                <button className="btn-secondary no  pl-5 pr-5 m-5 button-big" onClick={this.updateStateNo}>No</button>
              </React.Fragment>
            );
        }
    }

    navbar(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fake placeholder"></nav>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="navbar">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar-primary">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="https://github.com/FAUSheppy">My Github</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://atlantishq.de/impressum">Legal</a>
                      </li>
                    </ul>
                    <ul className="navbar-nav right">
                     <li className="nav-item">
                       <a className="navbar-brand hover-to-75" href="https://www.buymeacoffee.com/sheppy">
                	<img alt="Buy me a coffee" className="navbar-image" src='https://media.atlantishq.de/buymeacoffee.png'>
                	</img>
                	</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </React.Fragment>
        );
    }

    footer(){

    }

    render(){
        return (
          <React.Fragment>
          {this.navbar()}
          <div className="spacer"></div>
          <div className="container mt-5 main">
              <div className="main-text">
                {this.state["text"]}
              </div>
              <div className="spacer"></div>
              {this.buttonsForState()}
          </div>
          <div className="spacer"></div>
          {this.footer()}
          </React.Fragment>
        );
    }
}

export default MainDialog
