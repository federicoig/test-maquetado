import React from "react"
import Loader from "react-loader-spinner"
import "./index.scss"

export const Spinner = ({type, color, height, width}) => {
	return(
		<div className="spinner">
			<Loader
				type={type}
				color={color}
				height={height}
				width={width}
			/>
		</div>
	)
}