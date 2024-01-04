import { DatePicker } from "./DatePicker";
import { MemberPicker } from "./MemberPicker";
import { StatusPicker } from "./StatusPicker";

export function DynamicPicker({ title, task, onUpdate }) {
    switch (title) {
        case "Status":
        case "Priority":
            return <StatusPicker title={title} info={{ chosenOption: task[title.toLowerCase()] }} onUpdate={onUpdate} />
        case "Person":
            return <MemberPicker members={task.person} onUpdate={onUpdate} />
        case "Date":
            return <DatePicker date={task.date} onUpdate={onUpdate} />
        default:
            return <li>UNKNOWN {title}</li>;
    }
}
