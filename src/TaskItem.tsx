import React from 'react';

interface TaskItemProps {
    before: string,
    after: string
}

interface TaskItemState {
}

export class TaskItem extends React.Component<TaskItemProps, TaskItemState> {
    render() {
        return <div className="task-item">
            <textarea className="before" placeholder="Before" defaultValue={this.props.before}></textarea>
            <textarea className="after" placeholder="After" defaultValue={this.props.after}></textarea>
        </div>
    }
}
