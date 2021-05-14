import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	*{
		padding:0;
		margin:0;
		box-sizing: border-box;
	}

	html{
		font-family: 'Nunito', sans-serif;
	}

	body{
		
	}

	body,html{
		height:100vh;
	}

	/* #__next{
    height: 100%;
		} */

	a{
		color: magenta;
	}

	.showcase{
		position:relative;
		height:931px;
		max-height:931px;

		&::before{
			background-image: url('/doctor.jpg');
			background-repeat: no-repeat;
			background-size:cover;
			content: '';
			top:0;
			left:0;
			width: 100%;
			height: 100%;
			max-height:931px;
			position:absolute;
			background-color: rgba(0,0,0,.8);
			background-blend-mode: darken;
			z-index:1;
		} */

		img{
			width:100%;
			object-fit: cover;
			max-height:931px;
			position: relative;
			display:block;
			
			&::before{
				content: '';
			top:0;
			left:0;
			width: 100%;
			height: 100%;
				background-color: rgba(0,0,0,.8);
			background-blend-mode: darken;
			position:absolute;
			/* z-index:1 */
			}
		}
	}


.info h1{
	margin-bottom:50px;
	display: flex;
	justify-content: center;
}
	.cards{
		width:90%;
		max-width:100%;
		margin:0 auto;
		grid-gap:30px;
		display: grid;grid-template-columns:repeat(auto-fit,minmax(20rem, 1fr));
		
		a{
			text-decoration: none;
		}
		.card{
			background-color: white;

			.image{
				display: flex;
				justify-content: center;
				padding: 1.97rem;
				img{
				width:100%;
				object-fit:cover;
			}
			}
		}

		@media screen and (min-width:64rem){
			width:90rem;
		max-width:100%;
		margin:0 auto;
		grid-gap:30px;
		display: grid;grid-template-columns:repeat(auto-fit,minmax(20rem, 1fr));
		}

		@media screen and (min-width:1024px){
			padding: 0 1.97rem;
		}
	}


	//////////////////////////////////////////////////////////////////////////text-decoration

	.card{
		padding-bottom:100px;
		display: flex;
		flex-direction: column;
		position: relative;
		box-shadow: 0 3px 12px rgba(0,0,0,.6);
		.title{
			font-size:24px;
			width: 100%;
			display:flex;
			height: 60px;
			background-color: #e9e9e9;
			color: black;
			justify-content: center;
			align-items: center;

		}
		.description{
	padding:20px 30px;
}
		.product-list{
			list-style-type: none;
			/* li::marker{
			width:20px;
			height:20px;
			border-radius:50%;
			background-color: green;
		} */
		/* padding-left:50px; */
		li{
			padding-left: 30px;
			padding-bottom:5px;
			border-bottom: 1px solid green;
			cursor: pointer;
			padding-top:10px;

			&:hover{
				background-color: #f5f9f9;
			}

			 & + li{
/* padding-top:10px; */
			}

			span{
				color: #005694;
  font-weight: bold;
  padding: 5px;
  display:inline;
  border-radius:50%;
  /* background-color: green; */
  font-size: 14px;
  margin-right:5px;
			}

			/* &::marker{
				content:'↣';
				display: inline-block;
				width:20px;
				height:20px;
				padding: 5px 5px;
				place-items: center;
				background-color: green;
				color: green;

			} */
		}
		padding-bottom:3rem;
		}
	}

	.enquiry{
			position:absolute;
			display:inline-block;
			font-size:14px;
			color:white;
			bottom:50px;
			left:50%;
			transform: translateX(-50%);
			background-color: #005694;
			padding: 10px 20px;
			border-radius: 20px;
			text-transform: uppercase;//capitalize
			font-weight: 500;
			letter-spacing:.05rem;
			transition: all 250ms ease;

			&:hover{
				background-color: #167cc5;
			}
		}


.suppliers{
	width:60%;
		max-width:100%;
		height:300px;
		max-height:100%;
		margin:0 auto;
		grid-gap:50px;
		display: grid;
		align-content: center;
		grid-template-columns:repeat(auto-fit,minmax(2rem, 250px));
		padding-top:15rem;
	margin-bottom:20rem;

		.supplier{
			display:grid;
			place-items: center;
			width:100%;
		}

		img{
			width:100%;
		}

		@media screen and (min-width:64rem){
		width:90rem;
		max-width:100%;
		/* height:300px; */
		/* max-height:100%; */
		padding-top:5rem;
	padding-bottom:5rem;
		margin:0 auto;
		grid-gap:30px;
		display: grid;
		align-content: center;
		grid-template-columns:repeat(auto-fit,minmax(2rem, 250px));

		/* .supplier{
			width: 85px;
		} */
		}
}

#about{
	width:90%;
	padding-top:50px;
	padding-bottom:50px;
	line-height:2;
	font-size: 18px;

	@media screen and (min-width:64rem){
			width:90rem;
	}
}
	`;
