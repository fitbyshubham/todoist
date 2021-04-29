import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import {collatedTasksExist} from '../helpers';
import moment from 'moment'




export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  //do some work and return back the data, custom hook
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "1");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, []);
};

//basically we are asking, give me the tasks for the selected project 