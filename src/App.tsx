/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import update from 'immutability-helper';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TaskItem } from './TaskItem';
import { Timer } from './Timer';
import { Task } from './task';



interface AppProps {
}

interface AppState {
  taskItems: Array<Task>

}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.checkNotificationPermission();

    this.state = {
      taskItems: [{before: "", after: ""}]
    };
  }

  render() {
    let items = this.state.taskItems.flatMap((t, i) => 
      <TaskItem
        before={t.before}
        after={t.after}
        key={i}
        beforeChangeHandler={e => this.handleBeforeChange(i, e)}
        afterChangeHandler={e => this.handleAfterChange(i, e)} />
    ).reverse();
    return <div className="app">
      <Timer resetHandler={this.handleReset.bind(this)} />
      <div className="items">
        {items}
      </div>"
    </div>
  }

  handleBeforeChange(taskIndex: number, e: React.ChangeEvent) {
    let newVal = (e.target as HTMLTextAreaElement).value;
    this.setState(s => {
      let task = update(this.state.taskItems[taskIndex], {$merge: {before: newVal}});
      return {taskItems: update(s.taskItems, {$splice: [[taskIndex, 1, task]]})}
    });

  }

  handleAfterChange(taskIndex: number, e: React.ChangeEvent) {
    let newVal = (e.target as HTMLTextAreaElement).value;
    this.setState(s => {
      let task = update(this.state.taskItems[taskIndex], {$merge: {after: newVal}});
      return {taskItems: update(s.taskItems, {$splice: [[taskIndex, 1, task]]})}
    });
  }

  handleReset() {
    let newTask: Task = {before: "", after: ""};
    this.setState(s => ({
     taskItems: [newTask].concat(s.taskItems)
    }))
  }

  checkNotificationPermission() {
    if (window.Notification.permission !== "granted") {
      window.Notification.requestPermission().then(p => {
        if (p === "granted") {
          new Notification("Tomato Tasker notifications are on!");
        }
      })
    }
  }
}

export default App;
