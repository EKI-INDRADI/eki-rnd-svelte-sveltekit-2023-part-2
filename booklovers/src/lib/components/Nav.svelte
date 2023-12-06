<!---
Create a variable named isLoggedIn that will be set to true or false.  Then use it to create an if statement in the Svelte template that shows logged navigation if isLoggedIn is true or non-logged-in navigation if isLoggedIn is false.
-->


<script>
	let isLoggedIn = false
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/" >Book Lover</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				{#if isLoggedIn}
                <!-- Logged In -->
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/add">Add Book</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/profile">Profile</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<span class="nav-link">Logout</span>
				</li>
                <!-- /Logged In -->
				{:else}
				<!-- Not Logged In -->
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>

				<li class="nav-item">
					<a class="nav-link" href="/login">Login</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/signup">Sign Up</a>
				</li>
                <!-- /Not Logged In -->
				{/if}
			</ul>
		</div>
	</div>
</nav>

<style>
	.nav-item > span {
		cursor: pointer;
	}
</style>