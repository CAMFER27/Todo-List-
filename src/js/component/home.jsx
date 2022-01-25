import React from "react";
import Formulary from "./formulary.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="card" style={{ background: "black" }}>
			<div
				className="container text-center"
				style={{ background: "white" }}>
				<h1>To Do Things...</h1>
				<div className="checklist" style={{ background: "grey" }}>
					<Formulary />
				</div>
			</div>
		</div>
	);
};

/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <Formulary />
    
  </div>
</div>*/

export default Home;
