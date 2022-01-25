import React from "react";
import PropTypes from "prop-types";

const CreatingUserList = props => {
	const DeleteItems = indexItem => {
		props.setlist(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div className="text-center">
			<ul>
				{props.lista.map((item, index) => (
					<li key={index}>
						{item}
						<button
							className="btn"
							onClick={() => DeleteItems(index)}>
							<i className="fas fa-trash-alt" />
						</button>
						<button type="button" class="btn btn-outline-success">
							<select
								class="form-select"
								aria-label="Default select example">
								<option selected>Open this select menu</option>
								<option value="1">Finished</option>
								<option value="2">Unfinished</option>
								<option value="3">Failed</option>
								<option value="3">Following</option>
							</select>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

CreatingUserList.propTypes = {
	lista: PropTypes.array,
	setlist: PropTypes.func
};

export default CreatingUserList;
