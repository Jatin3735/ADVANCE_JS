let time = '6:30am';
if(time>='12:00am' && time<'12:00pm' ) {
    console.log('Good Morning');
}
else if(time>='12:00pm' && time<'4:00pm') {
    console.log('Good Afternoon');
}
else if(time>='4:00pm' && time<='7:00pm') {
    console.log('Good Evening');
}
else {
    console.log('Good Night')
}