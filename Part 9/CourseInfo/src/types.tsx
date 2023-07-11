interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CoursePartBasic extends description {
    kind: "basic"
  }
  
  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
  interface CoursePartBackground extends description {
    backgroundMaterial: string;
    kind: "background"
  }
  
  interface CoursePartSpecial extends description {
    requirements: ["nodejs", "jest"];
    kind: "special"
  }

  interface description extends CoursePartBase{
    description : string;
  }

  export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;