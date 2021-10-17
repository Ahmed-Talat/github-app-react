import Card from "./Card";
import './Form.css';

const CardList = (props) => (
	<div class="border mainClass">
  		{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

export default CardList;