'use strict';

const DateTime = props => {
    return (
			<p className="date">{props.date}</p>
    )
};

const DateTimePretty = dateTimeHoc(DateTime);

function dateTimeHoc(WrappedComponent) {
  return class extends React.Component {

    getPublicTime(date) {
			let result;
	    const dateDiff = new Date() - new Date(date);
      const minute = 1000 * 60;
      const hour = minute * 60;
			const day = hour * 24;
       
	    if (dateDiff < hour) {
        if(dateDiff > 0){
          result = `${Math.round(dateDiff / minute)} минут назад`; 
        } else {
          result = `До выхода осталось: ${Math.round(dateDiff * -1 / minute)} минут`; 
        }
	    } else if (dateDiff > hour && dateDiff < day) { 
		    result = `${Math.round(dateDiff / hour)} часов назад`;
	    } else if (dateDiff > day) {
		    result = `${Math.round(dateDiff / day)} дней назад`;
			}
			return result;
    }

    render() {
      return <WrappedComponent date = {this.getPublicTime(this.props.date)} />;
    }
  };
}