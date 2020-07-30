import styled from 'styled-components';

// Colours
// Background
export const backgroundPrimary = '#FFD500';
export const backgroundLight = '#FFFFFF';
export const buttonPrimary = '#F314A7';
export const inputBackground = 'rgba(196, 196, 196, 0.21)';
export const wallBackground = '#696b70';

// Font
export const titlePrimary = '#F89F00';
export const titleSecondary = '#FFD500';
export const textDark = '#000000';

// Border
export const borderYellow = '#fde600';

// Fonts
export const headerFont = "'Saira Extra Condensed', sans-serif";
export const primaryFont = "'Saira Semi Condensed', sans-serif";

// Media Queries
export const mobile = '(max-device-width : 480px)';
export const tablet = '(max-device-width : 1024px)';

// white window

export const WhiteDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 528px;
	height: 506px;
	background: ${backgroundLight};
	border: 1px solid ${borderYellow};
	box-sizing: border-box;
	box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
	
	@media ${tablet} {
		max-height: 90vh;
		max-width: 90vw;
		overflow: hidden;
	}

	/* h1 is the titlePrimary */

	h1 {
		font-family: ${primaryFont};
		font-weight: 800;
		font-size: 60px;
		line-height: 79px;
		color: ${titlePrimary};
		text-align: center;
		margin-bottom: 0;
		margin-top: 0;
	}

	/* h1 is for the link (play, login, credit)  */

	a {
		text-decoration: none;
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: normal;
		font-size: 45px;
		line-height: 71px;
		display: flex;
		align-items: center;
		text-align: center;
		color: ${textDark};
	}

	a:hover {
		border: 5px solid ${backgroundPrimary};
		box-sizing: border-box;
	}

	/* p is used for the text in the credit page */

	p {
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: 600;
		font-size: 26px;
		line-height: 41px;
		display: flex;
		align-items: center;
		color: ${textDark};
	}

	/* h2 is the second Title */
	h2 {
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: 800;
		font-size: 60px;
		line-height: 94px;
		display: flex;
		align-items: center;
		text-align: center;
		color: ${backgroundPrimary};
	}

	/* h3 is for Username and password (teext in the forms) */

	h3 {
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: normal;
		font-size: 35px;
		line-height: 55px;
		text-transform: uppercase;
		color: ${textDark};
	}

	/* h4 is used for the text under the button */

	h4 {
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 31px;
		display: flex;
		align-items: center;
		text-align: center;
		color: ${textDark};
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;

		input {
			border: none;
			background-color: ${inputBackground};
			width: 100%;
			height: 40px;
			margin-bottom: 1rem;
			padding: 0px 1rem;
			font-family: ${primaryFont};
		}

		div.field-container {
			width: 75%;
			display: flex;
			flex-direction: column;
			align-items: center;
			div.input-title {
				font-family: ${primaryFont};
				font-style: normal;
				font-weight: normal;
				font-size: 24px;
				align-self: flex-start;
			}
		}
	}

	div.login-option {
		a {
			font-family: ${primaryFont};
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
			line-height: 31px;
			display: flex;
			align-items: center;
			text-align: center;
			color: ${textDark};
			padding: 0;
		}
		a:hover {
			color: ${buttonPrimary};
			padding: 0;
			border: none;
		}
	}
`;

export const MainButton = styled.button`
	width: 285px;
	height: 62px;
	background: ${buttonPrimary};
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	text-align: center;
	font-family: ${primaryFont};
	font-style: normal;
	font-weight: 800;
	font-size: 33px;
	line-height: 52px;
	justify-content: center;
	color: ${backgroundLight};
	text-transform: uppercase;
	margin-top: 1rem;
	cursor: pointer;
	@media ${tablet} {
		max-width: 90%;
	}
`;

export const CreditDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 746px;
	height: 502px;
	margin-bottom: 10%;
	background: #ffffff;
	border: 1px solid #fde600;
	box-sizing: border-box;
	box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
	/* p is used for the text in the credit page */
	p {
		text-align: start;
		width: 687px;
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: 600;
		font-size: 26px;
		line-height: 41px;
		color: #000000;
		margin-top: -2%;
	}
`;

export const TitleCredit = styled.img`
	margin-top: 3%;
	width: 332px;
	height: 83px;
`;

export const FirstTitle = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5%;
	h2 {
		width: 230px;
		height: 83px;
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: 800;
		font-size: 60px;
		line-height: 94px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #ffd500;
	}

	h1 {
		font-family: ${headerFont};
		font-style: bold;
		font-weight: 800;
		font-size: 60px;
		line-height: 79px;
		display: flex;
		align-items: center;
		text-align: center;
		color: #f89f00;
		margin-right: 15%;
		margin-left: 15%;
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	a,
	.logout {
		text-decoration: none;
		font-family: ${primaryFont};
		font-style: normal;
		font-weight: normal;
		font-size: 45px;
		line-height: 71px;
		color: #000000;
		padding-right: 10%;
		padding-left: 10%;
		border: 5px solid #ffffff;

		&:hover {
			width: 300px;
			display: flex;
			align-items: center;
			text-align: center;
			border: 5px solid #ffd500;
			cursor: pointer;
		}
	}
`;

export const ErrorContainer = styled.div`
	color: red;
	font-size: 0.8rem;
	background-color: rgba(204,10,10, 0.2);
	padding: 0.4rem;
	border: 1px solid red;
	text-align: center;

	@media ${mobile} {
		padding: 0.2rem;
		font-size: 0.6rem;
	}
`;