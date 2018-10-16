'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <WrapMonthTable list={this.state.list} />
                <WrapYearTable list={this.state.list} />
                <WrapSortTable list={this.state.list} />
            </div>
        );
    }
};

const _monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const _curYear = (new Date().getFullYear());

const filterYerHoc = (Component, filterYear) => props => {
	const resultList = props.list.filter(item => item.year == filterYear);
	return <Component list={resultList}/>
};

const extendFieldsHoc = (Component) => props => {
	const resultList = props.list.map(item => ({
		date: item.date,
		amount: item.amount,
		month: _monthNames[(new Date(item.date)).getMonth()],
		year: (new Date(item.date)).getFullYear()
	})); 
	return <Component list={resultList}/>
};

const groupByHoc = (Component, fieldGroup) => props => {
	var result = [];
	props.list.reduce(function (res, value) {
			let key = (value[fieldGroup]);
			if (!res[key]) {
					res[key] = {
							amount: 0,
							[fieldGroup]: key
					};
					result.push(res[key])
			}
			res[key].amount += value.amount
			return res;
	}, {});
	return <Component list={result}/>
};

const sortDateDescHoc = (Component) => props => {
	const {list} = props
	list.sort((a, b) => {
		return (new Date(b.date)) - (new Date(a.date));
	});
	return <Component list={list}/>
};

let WrapMonthTable = extendFieldsHoc(
	filterYerHoc(
		groupByHoc(MonthTable, 'month'),
	_curYear)
);

const WrapYearTable = extendFieldsHoc(
	groupByHoc(YearTable, 'year'),
);

const WrapSortTable = extendFieldsHoc(
	sortDateDescHoc(SortTable)
);