import React from 'react';
import Start from './start';
import Reset from './reset';
import Pause from './pause';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: 0,
            timerTime: 60000,
            time: 0,
            reset: true,
            timerOn: false,
        }
    }

    render() {
        const { time } = this.state;
        return (
            <div> 
                <h1> {time} </h1>
                <Start 
                    onClick={this.state.timerOn === false ? () => this.handleStart() : undefined} 
                />
                <Reset
                    onClick={this.state.timerOn && this.state.reset ? () => this.handleReset() : undefined}
                />
                <Pause
                    onClick={this.state.timerOn === true ? () => this.handlePause() : undefined}
                />
            </div>
        );
    }

    setTime(hours = 0, minutes = 0, seconds = 0) {
        let hoursTomilsec = hours * 3600000;
        let minsTomilsec = minutes * 60000;
        let secsTomilsec = seconds * 1000;
        this.setState({
            timerTime: hoursTomilsec + minsTomilsec + secsTomilsec
        });
    }

    handleReset() {
        const reset = this.state.reset;
        this.setState({
            reset: !reset
        });
    }

    handlePause() {
        const { timerOn, startTime, time } = this.state;
        this.setState({
            timerOn: !timerOn,
            timerTime: startTime - Date.now()
        });
        clearInterval(this.timer);
    }

    handleStart() {
        const { timerOn, time, timerTime } = this.state;
        this.setState({
            timerOn: !timerOn,
            startTime: Date.now() + timerTime
        });
        this.timer = setInterval(
            () => this.tick(),
            10
        );
    }

    tick() {
        const startTime = this.state.startTime;
        const time = this.state.time;
        const now = Date.now();
        let timeLeft = startTime - now;
        this.setState({
            time: Math.floor( (timeLeft / 1000) % 60 )
        });
        if (timeLeft === 0) {
            this.handlePause();
        }
    }
}

export default Timer