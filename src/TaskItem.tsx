import React from 'react';

interface TaskItemProps {
    before: string,
    after: string,
    beforeChangeHandler: React.ChangeEventHandler,
    afterChangeHandler: React.ChangeEventHandler,
}

interface TaskItemState {
}

export class TaskItem extends React.Component<TaskItemProps, TaskItemState> {
    render() {
        return <div className="task-item">
            <textarea className="before"
                      placeholder="Before"
                      defaultValue={this.props.before}
                      onChange={this.props.beforeChangeHandler}></textarea>
            <textarea
                      className="after"
                      placeholder="After"
                      defaultValue={this.props.after}
                      onChange={this.props.afterChangeHandler}></textarea>
        </div>
    }
}
