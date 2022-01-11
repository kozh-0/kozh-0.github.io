import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

// <React.Fragment> или <> вместо div
/* class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26
		}
		this.nextYear = this.nextYear.bind(this);
		// или можно весь метод сюда записать
	}

	nextYear() {
		// this.state.years++; нельзя
		this.setState(state => ({
			years: ++state.years
		}))
	}
	// Чтоб работало надо привязать метод к конструктору
	render() {
		const {name, surename, link} = this.props;
		const {years} = this.state;
		return (
			<>
				<button onClick={this.nextYear}>++</button>
				<h1> My name is {name}, surename - {surename}, years - {years}</h1>
				<a href={link}>My profile</a>
			</>
		)
	}
}

const All = () => {
	return (
		<>
			<WhoAmI name="John" surename="Smith" link="facebook.com" />
			<WhoAmI name="Ivan" surename="Smith" link="vk.com" />
			<WhoAmI name="Alex" surename="Shepard" link="facebook.com" />

		</>
	)
} */

ReactDOM.render(<App/>, document.getElementById('root')); 


/* function WhoAmI({name, surename, link}) {
	return (
		<React.Fragment>
			<h1> My name is {name}, surename - {surename}</h1>
			<a href={link}>My profile</a>
		</React.Fragment>
	)
} */

		// Так как с помощью класса создается новый экземпляр, то у каждого экземпляра будут свои props, для получения из экземпляра this.props, через контекс вызова
		// И т.к. это объект мы его деструктурируем на переменные



// 3 способа
// 1) Чтобы функция работала надо ее привязать к контексту вызова через bind, к каждому новосозданному объекту она привязывается и для себя своя
// Всегда используем setState

// 2) Написать метод(функцию) в самом конструкторе

// 3) (Экспериментальная) Class Fields - записывает свойства и методы вне конструктора

