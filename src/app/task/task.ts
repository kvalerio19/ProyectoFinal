export interface Task {
  title: String;
  code: String;
  startDate: Date;
  endDate: Date;
  status: String;
  hashtags: Array<String>,
  priority: String,
  complexLevel: Number

}