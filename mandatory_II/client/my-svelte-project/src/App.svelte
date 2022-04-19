<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Login from "./pages/login/Login.svelte";
	import Signup from "./pages/signup/Signup.svelte";
	import Signout from "./pages/signout/Signout.svelte";
</script>

<main>
	<h1>The MEGA SHOP</h1>
	<Router>
		<nav>
			<Link to="/login">Login</Link>
			<Link to="/signup">Signup</Link>
			<Link to="/">Home</Link>
			<Link to= "/signout">sign out</Link>
			
		</nav>

		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
		<Route path="/signout" component={Signout}/>
		
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	nav {
		width: 100%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
