import React from 'react';

interface TimerProps {
    resetHandler: () => void,
}

interface TimerState {
      timerValue: number,
      timerRunning: boolean,
}

const TIMER_DEFAULT = 60 * 25;

export class Timer extends React.Component<TimerProps, TimerState> {
    timer: NodeJS.Timeout | null = null;
    
    constructor(props: TimerProps) {
        super(props);

        this.state  = {
            timerValue: TIMER_DEFAULT,
            timerRunning: false
        }
    }

    render() {
        let btnText = (this.state.timerRunning) ? "Pause" : "Start";

        return <div className="timer">
            <div className="timerText">
                {Math.floor(this.state.timerValue / 60)}:{this.state.timerValue % 60}
            </div>
            <button onClick={this.toggleRunning.bind(this)}>
                {btnText}
            </button>
            <button onClick={this.reset.bind(this)}>
                + New
            </button>
        </div>
    }

    toggleRunning() {
        this.setState(s => ({timerRunning: !s.timerRunning}));
    }

    componentDidUpdate(oldProps: TimerProps, oldState: TimerState) {
        if (this.state.timerRunning && !oldState.timerRunning) {
            this.kickOffTimer();
        } else if (!this.state.timerRunning && oldState.timerRunning && this.timer !== null) {
            clearTimeout(this.timer);
        }

        if (this.state.timerValue === 0 && oldState.timerValue !== 0) {
            new Notification("Pomo Timer Finished!");
        }
    }

    reset() {
        this.setState({
            timerRunning: false,
            timerValue: TIMER_DEFAULT
        })
        this.props.resetHandler();
    }

    kickOffTimer() {
        if (this.state.timerValue === 0) {
            return;
        }

        this.timer = setTimeout(() => {
            this.setState(s => ({timerValue: s.timerValue - 1}));
            this.kickOffTimer();
        }, 1000);
    }
}
