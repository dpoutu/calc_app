import {format} from 'date-fns';



function Time() {
    const now = new Date();
    const timeString = format(now, 'h:mm a');
    return <div className="time-display">{timeString}</div>;
}
export default Time;