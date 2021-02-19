let quote = ['People say nothing is impossible, but I do nothing every day.', 'Better to remain silent and be thought a fool than to speak out and remove all doubt.', 'If I were two-faced, would I be wearing this one?', 'The best thing about the future is that it comes one day at a time', 'The best thing about the future is that it comes one day at a time.', 'The only mystery in life is why the kamikaze pilots wore helmets.', 'Light travels faster than sound. This is why some people appear bright until you hear them speak.', 'Nobody realizes that some people expend tremendous energy merely to be normal.', 'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.', 'The difference between stupidity and genius is that genius has its limits'];
let author = ['Albert Einstein', 'Albert Camus', 'Alan Dundes', 'Al McGuire', 'Abraham Lincoln', 'A. A. Milne', ];
let mood = ['happy', 'sad', 'annoyed', 'irritated', 'focused', 'anxious', 'suprised',];


//returns a random number beween 0 and lenght of a given array
const randNum = (arr) => {
    return Math.floor(Math.random() * arr.length);
};
//returns array with weekDay, Date, Month, Year
const fullDate = () => {
    const currentDate = new Date();

    let day = '';
    switch(currentDate.getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'WednesDay';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'Something went wrong with date.';
            break;
        }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        return [`${day}`, `${currentDate.getDate()}`, `${months[currentDate.getMonth()]}`, `${currentDate.getFullYear()}`];
};

const message = `Today is ${fullDate()[0]}, ${fullDate()[1]}, ${fullDate()[2]}, ${fullDate()[3]} \nYou are feeling ${mood[randNum(mood)]}.\nHere is a motivation quote for you: "${quote[randNum(mood)]}"\nwritten by ${author[randNum(mood)]}.`;
console.log(message);