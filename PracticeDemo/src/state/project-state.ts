import {Project,ProjectStatus} from '../models/project'
  //Project State Management
  type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners: Listener<T>[] = [];
    addListener(listenFn: Listener<T>) {
      this.listeners.push(listenFn);
    }
  }

  export class ProjectState extends State<Project> {
    private projects: any[] = [];
    private static instance: ProjectState;
    private constructor() {
      super();
    }
    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      // const newProject={
      //     id:Math.random().toString(),
      //     title:title,
      //     description:description,
      //     people:numOfPeople
      // };
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      this.updateListeners();
    }

    moveProject(id: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === id);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }
    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }
//console.log("running.......") //prints only once
  export const projectState = ProjectState.getInstance();

//projectState imported in multiple files ,but still it imported only once by the file which calls first