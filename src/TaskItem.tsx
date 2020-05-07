import React from 'react';
import { Task } from './task';

interface TaskItemProps {
    task: Task,
    beforeChangeHandler: React.ChangeEventHandler,
    afterChangeHandler: React.ChangeEventHandler,
}

interface TaskItemState {
}

export class TaskItem extends React.Component<TaskItemProps, TaskItemState> {
    render() {
        return <div className="task-item">
            <div className="task-id">
                {this.props.task.taskNum + 1}
            </div>
            <textarea className="before"
                placeholder="Before"
                defaultValue={this.props.task.before}
                onChange={this.props.beforeChangeHandler}></textarea>
            <textarea
                className="after"
                placeholder="After"
                defaultValue={this.props.task.after}
                onChange={this.props.afterChangeHandler}></textarea>
        </div>

    }
}
